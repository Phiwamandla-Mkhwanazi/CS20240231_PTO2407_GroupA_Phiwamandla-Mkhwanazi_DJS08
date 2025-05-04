import React from "react";
import { Link } from "react-router-dom";

function HostVans() {
    const [vans, setVans] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(data => setVans(data.vans))
            .catch(err => {
                console.error("Fetch error:", err);
                setError("Failed to load vans. Please try again later.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>R{van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {isLoading && <h2>Loading...</h2>}
                {error && <h2 style={{ color: "red" }}>{error}</h2>}
                {!isLoading && !error && (
                    <section>
                        {hostVansEls.length > 0 ? hostVansEls : <h3>No vans found.</h3>}
                    </section>
                )}
            </div>
        </section>
    );
}

export default HostVans;
