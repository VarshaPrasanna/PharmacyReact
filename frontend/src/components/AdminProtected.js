import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const useAdmin = () => {
    const role = localStorage.getItem('role')
    if (role === 'admin') {
        return true
    } else {
        return false
    }
}
const AdminRoutes = () => {



    const isAdmin = useAdmin()



    return isAdmin ? <Outlet /> : <Navigate to="/" />
}


export default AdminRoutes;;