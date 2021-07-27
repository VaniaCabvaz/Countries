import React from 'react';
import './pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <ul className="list">
        {pageNumbers.map(number => (
          <li className="pagination" key={number} onClick={() => paginate(number)}>
           {number}
          </li>
        ))}
      </ul>
    
  );
};

export default Pagination;