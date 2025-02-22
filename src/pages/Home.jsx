import { EmulatorCard } from "../components/EmulatorCard";
import '../styles/home.css';

const emulators = [
    { id: 1, name: 'PS3', path: 'ps3', image: 'https://raw.githubusercontent.com/thecimber/server/refs/heads/main/ps3-png.png' },
    // { id: 2, name: 'SNES',path: 'snes',  image: 'https://raw.githubusercontent.com/thecimber/server/refs/heads/main/ps3-png.png' },
    // { id: 3, name: 'Game Boy', path: 'game-boy', image: 'https://raw.githubusercontent.com/thecimber/server/refs/heads/main/ps3-png.png' },
];


export const Home = () => {
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