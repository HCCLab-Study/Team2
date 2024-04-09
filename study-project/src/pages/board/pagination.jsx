import React from 'react';

const Pagination = ({
    currentPage,
    postsPerPage,
    totalPosts,
    paginate,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <div className="pt-4 flex justify-center space-x-2">
        <button
        className="font-semibold text-sm"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        >
        &lt;&lt;
        </button>
        {pageNumbers.map((number) => (
        <button
            key={number}
            className="font-semibold text-sm"
            onClick={() => paginate(number)}
            style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        >
            {number}
        </button>
    ))}
    <button
        className="font-semibold text-sm"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
        >
        &gt;&gt;
        </button>
    </div>
    );
};

export default Pagination;