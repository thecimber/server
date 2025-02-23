import { useState, useCallback } from "react";
import debounce from "just-debounce-it";
import { useGames } from "../hooks/useGames";

export const useEmulatorGames = (emulatorGame) => {
    const { gamesInfo, getGames } = useGames({ emulator: emulatorGame });
    const { games, title, pathImage } = gamesInfo;

    const [selectedGame, setSelectedGame] = useState(null);
    const [search, setSearch] = useState('');

    const debouncedGetGames = useCallback(
        debounce(search => {
            getGames(search);
        }, 1000),
        [getGames]
    );

    const openModal = (juego) => {
        setSelectedGame(juego);
    };

    const closeModal = () => {
        setSelectedGame(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getGames(search);
    };

    const handleChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        debouncedGetGames(newSearch);
    };

    return {
        games,
        title,
        pathImage,
        selectedGame,
        search,
        openModal,
        closeModal,
        handleSubmit,
        handleChange,
    };
};