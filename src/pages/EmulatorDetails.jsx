import { useParams } from "react-router-dom";
import '../styles/game.css'
import { SearchForm } from "../components/SearchForm";
import { useEmulatorGames } from "../hooks/useEmulatorGames";
import { GameGrid } from "../components/GameGrid";

export const EmulatorDetails = () => {
    const { emulatorGame } = useParams();
    const {
        games,
        search,
        handleSubmit,
        handleChange,
        emulador
    } = useEmulatorGames(emulatorGame);

    return (
        <>
            <h2 className="subtitulo my-3">Juegos para {emulatorGame}</h2>
            {
                emulador != '' &&
                <div className="text-center my-3">
                    <a href={emulador} className="btn-animated">
                        <i className="fa-solid fa-gamepad"></i> Emulador</a>
                </div>
            }

            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
            <GameGrid games={games} />

        </>
    )
}