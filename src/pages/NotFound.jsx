//Taller Daniel Orozco 12-enero-2025

import { Link } from "react-router";

const NotFound = () => {
    return (
        <div style={{ color: 'green', textAlign: 'center' }}>
            <h1>Page not found</h1>
            <h2>Daniel Orozco</h2>
            <button>
                <Link to="/">Regresar</Link>
            </button>
        </div>
    )
}

export default NotFound
