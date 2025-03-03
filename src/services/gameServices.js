import { PATH_SERVER_PS3 } from "../constants";
import { gamesPs3 } from "../data/ps3-games";

export const getGameByEmulator = ({emulator}) => {
    switch (emulator) {
        case 'ps3':
            const games = getGamesPs3().map(game => ({...game,console: 'Ps3',image: PATH_SERVER_PS3 + game.image}));
            return games
        default:
            return []
    }
}

export const getGamesBySearch = ({search}) => {
    const games = getGamesPs3().map(game => ({...game,console: 'Ps3',image: PATH_SERVER_PS3 + game.image}));

    const filterGames = games.filter((game) =>
        game.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );

    return filterGames;
}


const getGamesPs3 = () => {
    return gamesPs3;
}