import { useLocation } from "react-router-dom";
import { useEmulatorGames } from "../hooks/useEmulatorGames";
import { SearchForm } from "./SearchForm";
import { GameGrid } from "./GameGrid";
import { useSearchGames } from "../hooks/useSearchGames";

export const GamesSearch = () => {
    const location = useLocation();
    const { startSearch } = location.state || { startSearch: '' };
    const {
        games,
        result,
        search,
        handleChange,
        handleSubmit

    } = useSearchGames(startSearch);



    return (
        <>
            <h2 className="subtitulo my-3 subtitulo-resultados">Resultados para {result}</h2>
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
            <GameGrid games={games} />

        </>
    )
}