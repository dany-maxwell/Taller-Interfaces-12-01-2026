import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./PrivateHeader.css";

const PrivateHeader = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <header className="private-header">
            <h2 className="private-header__logo">ESFOT ASO</h2>

            <div className="private-header__user">
                <FaUserCircle
                    className="private-header__icon"
                    onClick={() => setOpen(!open)}
                />

                {open && (
                    <div className="private-header__menu">
                        <Link to="/profile">Perfil</Link>
                        <Link to="/change-password">Cambiar contraseña</Link>
                        <button onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default PrivateHeader;
