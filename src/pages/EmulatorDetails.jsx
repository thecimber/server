import { useParams } from "react-router-dom";
import '../styles/game.css'
import { GameCard } from "../components/GameCard";
import { ModalDetailsGame } from "../components/ModalDetailsGame";
import { SearchForm } from "../components/SearchForm";
import { useEmulatorGames } from "../hooks/useEmulatorGames";
import { useEffect } from "react";
import { Pagination } from "../components/Pagination";
import { usePagination } from "../hooks/UsePagination";

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
    console.log('pagination');
    console.log(gamesPaginaton);
    
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
            <h2 className="subtitulo my-3">Juegos para {title}</h2>
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
            <div className="juegos-container">
                {
                    gamesPaginaton.length === 0 ?
                        <div className="alert alert-warning w-50 text-center" role="alert">
                            No se econtraron juegos!
                        </div>
                        :
                        (
                            gamesPaginaton.map(({ id, name, image, format, language, size, downloadFormat, link, downloadTutorial, date, genre, downloadMethods }) => {
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
            {/* 
                    currentPage,
        gamesPaginaton,
        paginate,
        goToPreviousPage,
        goToNextPage,
        length
            
            */}
            <Pagination currentPage={currentPage} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} length={length} gamesPerPage={gamesPerPage} paginate={paginate}/>
            {selectedGame && <ModalDetailsGame game={selectedGame} onClose={closeModal} console={title} />}

        </>
    )
}