import { useState, useCallback } from "react";
import debounce from "just-debounce-it";
import { useGames } from "../hooks/useGames";

export const useEmulatorGames = (emulatorGame) => {

    const { games, getGames } = useGames({ emulator: emulatorGame });

    const [search, setSearch] = useState('');

    const debouncedGetGames = useCallback(
        debounce(search => {
            getGames(search);
        }, 1000),
        [getGames]
    );

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
        search,
        handleSubmit,
        handleChange,
    };
};