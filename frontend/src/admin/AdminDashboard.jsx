import AdminLayout from "../layouts/AdminLayout"

export default function AdminDashboard(){
    return (
        <AdminLayout>
            <div>
                <div className="grid-cols-4 grid gap-6">
                    <div className="border border-[#4381a7] h-50 rounded-md bg-[#61a4cd]"></div>
                    <div className="border border-[#4381a7] h-50 rounded-md bg-[#61a4cd]"></div>
                    <div className="border border-[#4381a7] h-50 rounded-md bg-[#61a4cd]"></div>
                    <div className="border border-[#4381a7] h-50 rounded-md bg-[#61a4cd]"></div>
                </div>
                <div className="border border-[#4381a7] h-screen w-full rounded-md bg-[#61a4cd] mt-6"></div>
            </div>
        </AdminLayout>
    )
}