import { PATH_SERVER_PS3,PATH_SERVER_PC, PATH_SERVER_PSP, PATH_SERVER_DS, PATH_SERVER_WIIU, PATH_SERVER_GAMECUBE, PATH_SERVER_PS2, PATH_SERVER_SW } from "../constants";
import { gamesPs3 } from "../data/ps3-games";
import { gamesPc } from "../data/pc-games";
import { gamesPsp } from "../data/psp-games";
import { gamesDs } from "../data/ds-games";
import { gamesWiiu } from "../data/wiiu-games";
import { gamesPs2 } from "../data/ps2-games";
import { gamesGameCube } from "../data/gamecube-games";
import { gamesSw } from "../data/sw-games";

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
        case 'gamecube':
            return getGamesGameCube().map(game => ({...game,console: 'Game Cube',image: PATH_SERVER_GAMECUBE + game.image}));
        case 'ps2':
            return getGamesPs2().map(game => ({...game,console: 'Ps2',image: PATH_SERVER_PS2 + game.image}));
        case 'sw':
            return getGamesSw().map(game => ({...game,console: 'Switch',image: PATH_SERVER_SW + game.image}));
        default:
            return []
    }
}

export const getGamesBySearch = ({search}) => {
    const gamesPs3 = getGamesPs3().map(game => ({...game,console: 'Ps3',image: PATH_SERVER_PS3 + game.image}));
    const gamesPc = getGamesPc().map(game => ({...game,console: 'Pc',image: PATH_SERVER_PC + game.image}));
    const gamesPsp = getGamesPsp().map(game => ({...game,console: 'Psp',image: PATH_SERVER_PSP + game.image}));
    const gamesDs = getGamesDs().map(game => ({...game,console: 'Ds',image: PATH_SERVER_DS + game.image}));
    const gamesWiiu = getGamesWiiu().map(game => ({...game,console: 'Wii U',image: PATH_SERVER_WIIU + game.image}));
    const gamesGameCube = getGamesGameCube().map(game => ({...game,console: 'Game Cube',image: PATH_SERVER_GAMECUBE + game.image}));
    const gamesPs2= getGamesPs2().map(game => ({...game,console: 'Ps2',image: PATH_SERVER_PS2 + game.image}));
    const gamesNw = getGamesSw().map(game => ({...game,console: 'Switch',image: PATH_SERVER_SW + game.image}));


    const games = [...gamesPs3,...gamesPc, ...gamesPsp, ...gamesDs,...gamesWiiu, ...gamesGameCube, ...gamesPs2, ...gamesNw];
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
const getGamesPs2= () => {
    return gamesPs2;
}
const getGamesGameCube= () => {
    return gamesGameCube;
}
const getGamesSw= () => {
    return gamesSw;
}