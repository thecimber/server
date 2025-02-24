import React from 'react';

export const Pagination = ({ currentPage, goToPreviousPage, goToNextPage, gamesPerPage, length, paginate }) => {
    const totalPages = Math.ceil(length / gamesPerPage); 
    const maxPagesToShow = 5;

    const generatePageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= maxPagesToShow) {

            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {

            if (currentPage <= Math.ceil(maxPagesToShow / 2)) {

                for (let i = 1; i <= maxPagesToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {

                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = currentPage - Math.floor(maxPagesToShow / 2); i <= currentPage + Math.floor(maxPagesToShow / 2); i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className='container text-center'>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPreviousPage} disabled={currentPage === 1}>
                            {'<'}
                        </button>
                    </li>
                    {generatePageNumbers().map((page, index) => (
                        <li key={index} className={`page-item ${page === currentPage ? "active" : ""} ${page === "..." ? "disabled" : ""}`}>
                            {page === "..." ? (
                                <span className="page-link">...</span>
                            ) : (
                                <button className="page-link" onClick={() => paginate(page)}>
                                    {page}
                                </button>
                            )}
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToNextPage} disabled={currentPage === totalPages}>
                            {'>'}
                        </button>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};