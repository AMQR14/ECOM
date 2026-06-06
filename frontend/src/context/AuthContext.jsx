import { createContext, useContext, useEffect, useState } from "react"
import api from "../lib/api"

const AuthContext = createContext()

export default function AuthProvider({children}){
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
    })
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            api.get('/users')
                .then(res => setUser(res.data))
                .catch(()=> localStorage.removeItem('token'))
                .finally(()=> setLoading(false))
        }else{
            setLoading(false)
        }
    }, [])

    async function register(name, email, phone, password, role) {
        const res = await api.post('/register', {name, email, phone, password, role})
        return res.data
    }

    async function login(email, password) {
        const res = await api.post('/login', {email, password})
        const {access_token} = res.data
        localStorage.setItem('token', access_token)

        const userRes = await api.get('users')
        setUser(userRes.data)

        return res.data
    }

    async function logout() {
        try{
            await api.post('/logout', {})
        }finally{
            setUser(null)
            localStorage.removeItem('token')
        }
    }

    return (
        <AuthContext.Provider value={{user, loading, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}