import { ToastContainer, toast } from 'react-toastify';
import { EmulatorCard } from "../components/EmulatorCard";
import { getEmulators } from "../services/emulatorService";
import '../styles/home.css';
import { useEffect } from "react";

export const Home = () => {
    const emulators = getEmulators();
    const notify = () => {
        toast.success('Nuevo contenido de "Switch" disponible!', {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="green" d="M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" /></svg>
            ),
        });
        toast.success('Nueva sección "Android" disponible!', {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="green" d="M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" /></svg>
            ),
        });
    }
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