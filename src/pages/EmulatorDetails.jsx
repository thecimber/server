import { useParams } from "react-router-dom";
import { getGameByEmulator } from "../services/gameServices";
import '../styles/game.css'
import { GameCard } from "../components/GameCard";
import { useCallback, useState } from "react";
import { ModalDetailsGame } from "../components/ModalDetailsGame";
import { useGames } from "../hooks/useGames";
import debounce from "just-debounce-it";

export const EmulatorDetails = () => {

    const { emuladorNombre } = useParams();

    const [selectedGame, setSelectedGame] = useState(null);

    const { gamesInfo, getGames } = useGames({ emulator: emuladorNombre });

    const { games, title, pathImage } = gamesInfo;

    const [search, setSearch] = useState('');

    const debouncedGetGames = useCallback(
        debounce(search => {
            getGames(search)
        }, 1000)
        , [getGames]
    )

    const openModal = (juego) => {
        setSelectedGame(juego);
    };

    const closeModal = () => {
        setSelectedGame(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        getGames(search);
    }

    const handleChange = (event) => {
        const newSearch = event.target.value
        setSearch(newSearch)
        debouncedGetGames(newSearch)
    }

    return (
        <>
            <h2 className="subtitulo my-3">Juegos para {title}</h2>
            <form action="" onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
                <div className="row w-50 w-md-50">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar juegos..."
                            value={search}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="col-12 col-md-3">
                        <button className="btn btn-success w-100">Buscar</button>
                    </div>
                </div>
            </form>
            <div className="juegos-container">
                {
                    games.length === 0 ?
                        <div className="alert alert-warning w-50 text-center" role="alert">
                            No se econtraron juegos!
                        </div>
                        :
                        (
                            games.map(game => {

                                const { id, name, image, format, language, size, downloadFormat, link, downloadTutorial, date, genre, downloadMethods } = game;
                                return (
                                    <GameCard
                                        key={id}
                                        name={name}
                                        image={image}
                                        format={format}
                                        language={language}
                                        size={size}
                                        downloadFormat={downloadFormat}
                                        link={link}
                                        downloadTutorial={downloadTutorial}
                                        date={date}
                                        genre={genre}
                                        pathImage={pathImage}
                                        downloadMethods={downloadMethods}
                                        handleDetailsGame={openModal}
                                    />
                                )
                            })
                        )
                }
            </div>
            {selectedGame && <ModalDetailsGame game={selectedGame} onClose={closeModal} console={title} />}

        </>
    )
}