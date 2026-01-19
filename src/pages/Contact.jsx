//Taller Daniel Orozco 12-enero-2025

import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import Girl from '../components/headergirl/Girl'

const Contact = () => {
    return (
        <>
            <Header/>
            <Girl/>
                        <section className="login__container">
                <h3 className="login__title" >Contactos</h3>
                <p>DANIEL OROZCO</p>
            </section>
            <Footer/>
        </>
    )
}

export default Contact