import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const location = useLocation()
    const isAuthenticated = false // update with real logic

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Outlet />
}
