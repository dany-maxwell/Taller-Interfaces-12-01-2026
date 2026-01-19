//Taller Daniel Orozco 12-enero-2025

import {Link} from 'react-router'

import Footer from '../components/footer/Footer'
import PrivateHeader from '../components/privateHeader/PrivateHeader'

const Dashboard = () => {
    return (
        <>  
            <PrivateHeader />
            <h1>Admin Dashboard</h1>
            <h2>Daniel Orozco</h2>
            <button>
                <Link to="/">Regresar</Link>
            </button>
            <Footer />
        </>
    )
}

export default Dashboard