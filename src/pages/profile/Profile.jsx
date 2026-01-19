import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import PrivateHeader from "../../components/privateHeader/PrivateHeader";
import Footer from "../../components/footer/Footer";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth.currentUser;
        console.log("Usuario actual:", currentUser);
        setUser(currentUser);
    }, []);

    if (!user) {
        return <p>Cargando perfil...</p>;
    }

    return (
        <>
            <PrivateHeader />
            <main className="profile__container">
                <h1>Mi Perfil</h1>
                <div className="profile__card">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>UID:</strong> {user.uid}</p>
                    <p><strong>Creado:</strong> {new Date(user.metadata.creationTime).toLocaleString()}</p>
                    <p><strong>Último login:</strong> {new Date(user.metadata.lastSignInTime).toLocaleString()}</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Profile;