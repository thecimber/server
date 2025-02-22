import { useParams } from "react-router-dom";
import { getGameByEmulator } from "../services/gameServices";
import '../styles/game.css'
import { GameCard } from "../components/GameCard";
import { useState } from "react";
import { ModalDetailsGame } from "../components/ModalDetailsGame";

export const EmulatorDetails = () => {
    const { emuladorNombre } = useParams();

    const [selectedGame, setSelectedGame] = useState(null);

    const { games, title, pathImage } = getGameByEmulator(emuladorNombre);

    const openModal = (juego) => {
        console.log('click juego');
        setSelectedGame(juego);
    };

    const closeModal = () => {
        setSelectedGame(null);
    };

    return (
        <>
            <div className="juegos-container">
                <h2 className="subtitulo">Juegos para {title}</h2>
                {
                    games.map(game => {

                        const { id, name, image, format, language, size, downloadFormat, link, downloadTutorial, date, genre,downloadMethods } = game;
                        console.log(image);
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
                                    downloadMethods ={downloadMethods}
                                    handleDetailsGame = {openModal}
                                />
                        )
                    })
                }
            </div>
            {selectedGame && <ModalDetailsGame game={selectedGame} onClose={closeModal} console ={title}/>}

        </>
    )
}