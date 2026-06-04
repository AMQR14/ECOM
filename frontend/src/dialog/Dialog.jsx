export default function Dialog({children}){
    return (
        <div className="bg-black/40 top-0 left-0 fixed w-full min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-md p-4 w-full mx-4 md:w-100 max-w-100 max-h-150 overflow-auto no-scrollbar">
                {children}
            </div>
        </div>
    )
}