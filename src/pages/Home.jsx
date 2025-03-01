import { EmulatorCard } from "../components/EmulatorCard";
import { getEmulators } from "../services/emulatorService";
import '../styles/home.css';

export const Home = () => {
    const emulators = getEmulators();
    return (
        <div className="home">
            <h1 className="text-white">Emuladores</h1>
            <div className="emuladores-list">
                {emulators.map((emulator) => (
                    <EmulatorCard key={emulator.id} emulator={emulator} />
                ))}
            </div>
        </div>
    )
}