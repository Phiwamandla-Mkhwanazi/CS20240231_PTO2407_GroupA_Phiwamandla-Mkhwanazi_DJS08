import { Outlet } from "react-router-dom";
import HostHeader from './HostHeader';

function Layout() {
    return (
        <>
            <HostHeader/>
            <Outlet />
        </>
    )
}

export default  Layout;