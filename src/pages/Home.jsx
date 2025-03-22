import { ToastContainer, toast } from 'react-toastify';
import { EmulatorCard } from "../components/EmulatorCard";
import { getEmulators } from "../services/emulatorService";
import '../styles/home.css';
import { useEffect } from "react";

export const Home = () => {
    const emulators = getEmulators();
    const notify = () => toast.success("Nuevo contenido para PC disponible!");

    useEffect(() => {
        notify();
    }, []);

    return (
        <>
            <div className="home">
                <h1 className="text-white">Emuladores</h1>
                <div className="emuladores-list">
                    {emulators.map((emulator) => (
                        <EmulatorCard key={emulator.id} emulator={emulator} />
                    ))}
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}