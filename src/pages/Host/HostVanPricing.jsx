import { useOutletContext } from "react-router-dom"

function HostVanInfo() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">R{currentVan.price}<span>/day</span></h3>
    )
}

export default HostVanInfo;