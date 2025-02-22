import { PATH_SERVER_PS3 } from "../constants";
import { gamesPs3 } from "../data/ps3-games";

export const getGameByEmulator = ({emulator}) => {
    switch (emulator) {
        case 'ps3':
            const games = getGamesPs3();
            return {
                games,
                title: 'Ps3',
                pathImage: PATH_SERVER_PS3
            }


        default:
            return []
    }
}


const getGamesPs3 = () => {
    return gamesPs3;
}