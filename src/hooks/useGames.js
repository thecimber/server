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
        setGamesInfo({
            games, title, pathImage
        });
    }, [])


    const getGames = (search) => {
        const { games, title, pathImage } = getGameByEmulator({ emulator });
        const filterGames = games.filter((game) =>
            game.name.toLowerCase().includes(search.toLowerCase().trim())
        );
        setGamesInfo({
            games:filterGames, 
            title, 
            pathImage
        })
    }


    return {
        gamesInfo,
        getGames
    }


}