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
    } = useEmulatorGames(emulatorGame);



    return (
        <>
            <h2 className="subtitulo my-3">Juegos para {emulatorGame}</h2>
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
            <GameGrid games={games}/>

        </>
    )
}