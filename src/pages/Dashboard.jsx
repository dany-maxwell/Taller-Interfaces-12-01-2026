//Taller Daniel Orozco 12-enero-2025

import {Link} from 'react-router'

const Dashboard = () => {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <h2>Daniel Orozco</h2>
            <button>
                <Link to="/">Regresar</Link>
            </button>
        </>
    )
}

export default Dashboard