import { useState } from "react";

export const usePagination = ({ games }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 8; 

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < Math.ceil(games.length / gamesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const goToCurrentPage =() =>{
        setCurrentPage(1);
    }

    return {
        currentPage,
        gamesPaginaton: currentGames,
        paginate,
        goToPreviousPage,
        goToNextPage,
        length: games.length,
        gamesPerPage,
        goToCurrentPage
    }
}