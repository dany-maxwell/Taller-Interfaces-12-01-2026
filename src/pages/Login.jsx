//Taller Daniel Orozco 12-enero-2025

import Footer from "../components/footer/Footer"
import Header from "../components/header/header"
import { useState } from "react"
import { loginUser } from "../services/auhService"
import { useNavigate } from "react-router"

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            alert('Inicio de sesión exitoso');
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <>
            <Header />
            <section className="login__container">
                <h3 className="login__title" >Inicio de sesión</h3>
                <p>Daniel Orozco</p>
                <form onSubmit={handleSubmit}>
                    <input
                        className="login__input"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Ingresar</button>
                </form>
            </section>
            <Footer />
        </>

    )
}

export default Login