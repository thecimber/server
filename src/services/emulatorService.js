import { emulators } from "../data/emulators"

export const getEmulators = () =>{
    return emulators;
}

export const getEmulatorByName = ( path ) =>{
    const emulador =  emulators.find( emulator => emulator.path === path);
    return emulador.emulador;
}