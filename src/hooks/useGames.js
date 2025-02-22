import { useEffect, useState } from "react"
import { getGameByEmulator } from "../services/gameServices";

export const useGames = ({ emulator }) => {

    const [gamesInfo, setGamesInfo] = useState({
        games: [],
        title: '',
        pathImage: ''
    });

    useEffect(() => {
        const { games, title, pathImage } = getGameByEmulator({ emulator });
        const gamesSorted = games.sort((a, b) => a.name.localeCompare(b.name));
        setGamesInfo({
            games: gamesSorted, title, pathImage
        });
    }, [])


    const getGames = (search) => {
        const { games, title, pathImage } = getGameByEmulator({ emulator });
        const filterGames = games.filter((game) =>
            game.name.toLowerCase().includes(search.toLowerCase().trim())
        );
        const gamesSorted = filterGames.sort((a, b) => a.name.localeCompare(b.name));
        setGamesInfo({
            games:gamesSorted, 
            title, 
            pathImage
        })
    }


    return {
        gamesInfo,
        getGames
    }


}