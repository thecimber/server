import { useParams } from "react-router-dom";
import '../styles/game.css'
import { GameCard } from "../components/GameCard";
import { ModalDetailsGame } from "../components/ModalDetailsGame";
import { SearchForm } from "../components/SearchForm";
import { useEmulatorGames } from "../hooks/useEmulatorGames";
import { useEffect } from "react";

export const EmulatorDetails = () => {
    const { emulatorGame } = useParams();
    const {
        games,
        title,
        pathImage,
        selectedGame,
        search,
        openModal,
        closeModal,
        handleSubmit,
        handleChange,
    } = useEmulatorGames(emulatorGame);

    useEffect(() => {
        if (selectedGame) {
          document.body.classList.add("modal-open");
        } else {
          document.body.classList.remove("modal-open");
        }
    
        return () => {
          document.body.classList.remove("modal-open");
        };
      }, [selectedGame]);

    return (
        <>
            <h2 className="subtitulo my-3">Juegos para {title}</h2>
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} search={search}/>
            <div className="juegos-container">
                {
                    games.length === 0 ?
                        <div className="alert alert-warning w-50 text-center" role="alert">
                            No se econtraron juegos!
                        </div>
                        :
                        (
                            games.map(({ id, name, image, format, language, size, downloadFormat, link, downloadTutorial, date, genre, downloadMethods }) => {
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