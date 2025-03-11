import { PATH_SERVER_PS3,PATH_SERVER_PC, PATH_SERVER_PSP, PATH_SERVER_DS, PATH_SERVER_WIIU } from "../constants";
import { gamesPs3 } from "../data/ps3-games";
import { gamesPc } from "../data/pc-games";
import { gamesPsp } from "../data/psp-games";
import { gamesDs } from "../data/ds-games";
import { gamesWiiu } from "../data/wiiu-games";

export const getGameByEmulator = ({emulator}) => {
    switch (emulator) {
        case 'ps3':
            return getGamesPs3().map(game => ({...game,console: 'Ps3',image: PATH_SERVER_PS3 + game.image}));
        case 'pc':
            return getGamesPc().map(game => ({...game,console: 'Pc',image: PATH_SERVER_PC + game.image}));
        case 'psp':
            return getGamesPsp().map(game => ({...game,console: 'Psp',image: PATH_SERVER_PSP + game.image}));
        case 'ds':
            return getGamesDs().map(game => ({...game,console: 'Ds',image: PATH_SERVER_DS + game.image}));
        case 'wiiu':
            return getGamesWiiu().map(game => ({...game,console: 'Wii U',image: PATH_SERVER_WIIU + game.image}));
        default:
            return []
    }
}

export const getGamesBySearch = ({search}) => {
    const gamesPs3 = getGamesPs3().map(game => ({...game,console: 'Ps3',image: PATH_SERVER_PS3 + game.image}));
    const gamesPc = getGamesPc().map(game => ({...game,console: 'Pc',image: PATH_SERVER_PC + game.image}));
    const gamesPsp = getGamesPsp().map(game => ({...game,console: 'Psp',image: PATH_SERVER_PSP + game.image}));
    const gamesDs = getGamesDs().map(game => ({...game,console: 'Ds',image: PATH_SERVER_DS + game.image}));
    const gamesWiiu = getGamesDs().map(game => ({...game,console: 'Wii U',image: PATH_SERVER_WIIU + game.image}));


    const games = [...gamesPs3,...gamesPc, ...gamesPsp, ...gamesDs,...gamesWiiu];
    const filterGames = games.filter((game) =>
        game.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );

    return filterGames;
}


const getGamesPs3 = () => {
    return gamesPs3;
}
const getGamesPc = () => {
    return gamesPc;
}
const getGamesPsp = () => {
    return gamesPsp;
}
const getGamesDs = () => {
    return gamesDs;
}
const getGamesWiiu = () => {
    return gamesWiiu;
}