import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const location = useLocation()
    const isAuthenticated = true

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Outlet />
}
