import { useEffect, useState } from "react"
import { getGameByEmulator } from "../services/gameServices";

export const useGames = ({ emulator }) => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const games = getGameByEmulator({ emulator });
        const gamesSorted = games.sort((a, b) => a.name.localeCompare(b.name));
        setGames(gamesSorted);
    }, []);


    const getGames = (search) => {
        const games = getGameByEmulator({ emulator });
        const filterGames = games.filter((game) =>
            game.name.toLowerCase().includes(search.toLowerCase().trim())
        );
        const gamesSorted = filterGames.sort((a, b) => a.name.localeCompare(b.name));
        setGames(gamesSorted)
    }


    return {
        games,
        getGames
    }


}