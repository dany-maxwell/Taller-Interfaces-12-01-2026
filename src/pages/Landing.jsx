//Taller Daniel Orozco 12-enero-2025

import Header from "../components/header/header"
import Careers from "../components/careers/Careers"
import Events from "../components/events/Events"
import Footer from "../components/footer/Footer"
import Main from "../components/main/Main"

const Landing = () => {
    return(
        <>
            <div data_aos="fade_down"> 
                <Header />
            </div>
            <div data_aos="zoom-in" data-aos-duration="1500">
                <Main /> 
            </div>
            <Careers />
            <Events />
            <Footer />
        </>
    )
}
export default Landing