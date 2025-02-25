import { useEffect, useState } from "react";
import { getGamesBySearch } from "../services/gameServices";

export const useSearchGames = (startSearch) =>{
        const [games, setGames] = useState([]);

        const [search, setSearch] = useState(startSearch);

        const [result, setResult] = useState(startSearch);
    
        useEffect(() => {
            const games = getGamesBySearch({search});
            const gamesSorted = games.sort((a, b) => a.name.localeCompare(b.name));
            setGames(gamesSorted);
        }, []);
    
    
        const getGames = (search) => {
            const games = getGamesBySearch({search});
            const filterGames = games.filter((game) =>
                game.name.toLowerCase().includes(search.toLowerCase().trim())
            );
            const gamesSorted = filterGames.sort((a, b) => a.name.localeCompare(b.name));
            setGames(gamesSorted)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            if (search === '') return;
            getGames(search);
            setResult(search);
        };
    
        const handleChange = (event) => {
            const newSearch = event.target.value;
            setSearch(newSearch);
            // debouncedGetGames(newSearch);
        };
    
    
        return {
            games,
            result,
            search,
            getGames,
            handleSubmit,
            handleChange
        }
}