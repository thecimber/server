import { useEffect, useState } from "react";
import { usePagination } from "../hooks/UsePagination";
import { ModalDetailsGame } from "./ModalDetailsGame";
import { Pagination } from "./Pagination";
import { GameCard } from "./GameCard";

export const GameGrid = ({ games }) => {

    const [selectedGame, setSelectedGame] = useState(null);

    const {
        currentPage,
        gamesPaginaton,
        paginate,
        goToPreviousPage,
        goToNextPage,
        length,
        gamesPerPage,
        goToCurrentPage
    } = usePagination({ games });

    const openModal = (juego) => {
        setSelectedGame(juego);
    };

    const closeModal = () => {
        setSelectedGame(null);
    };

    useEffect(() => {
        goToCurrentPage();
    }, [games]);

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
            <div className="juegos-container">
                {
                    gamesPaginaton.length === 0 ?
                        <div className="alert alert-warning w-50 text-center" role="alert">
                            No se econtraron juegos!
                        </div>
                        :
                        (
                            gamesPaginaton.map(({ id, name,console ,image, format, language, size, downloadFormat, link, downloadTutorial, date, genre, downloadMethods }) => {
                                return (
                                    <GameCard
                                        key={id}
                                        name={name}
                                        console={console}
                                        image={image}
                                        format={format}
                                        language={language}
                                        size={size}
                                        downloadFormat={downloadFormat}
                                        link={link}
                                        downloadTutorial={downloadTutorial}
                                        date={date}
                                        genre={genre}
                                        downloadMethods={downloadMethods}
                                        handleDetailsGame={openModal}
                                    />
                                )
                            })
                        )
                }
            </div>

            <Pagination currentPage={currentPage} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} length={length} gamesPerPage={gamesPerPage} paginate={paginate} />
            {selectedGame && <ModalDetailsGame game={selectedGame} onClose={closeModal}/>}

        </>
    );
} 