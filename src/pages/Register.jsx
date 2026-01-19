import { Link } from 'react-router'
import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import { useState } from 'react'
import { registerUser } from '../services/auhService'

import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handldSumnb = async(e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            alert('Usuario registrado con éxito');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Header />
            <section className="register__container">
                <h3 className="register__title" >Registro por Daniel Orozco</h3>
                <form onSubmit={handldSumnb}>
                    <input
                        className="register__input"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="register__input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Registrarse</button>
                </form>
            </section >
            <Footer />
        </div>
    )
}

export default Register