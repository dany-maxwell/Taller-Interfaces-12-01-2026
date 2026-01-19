import {Link} from 'react-router'

import Footer from '../components/footer/Footer'
import PrivateHeader from '../components/privateHeader/PrivateHeader'

const Dashboard = () => {
    return (
        <>  
            <PrivateHeader />
            <h1>Admin Dashboard</h1>
            <button>
                <Link to="/">Regresar</Link>
            </button>
            <Footer />
        </>
    )
}

export default Dashboard