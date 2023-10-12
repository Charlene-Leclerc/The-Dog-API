import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ length, itemsPerPage, handlePageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'Précédent'}
            nextLabel={'Suivant'}
            breakLabel={'...'}
            pageCount={Math.ceil(length / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />

    );
};

export default Pagination;