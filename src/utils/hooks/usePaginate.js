import { useState } from "react";

export const usePaginate = (array, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(array.length / itemsPerPage);

  const currentArray = array.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return {
    currentArray,
    totalPages,
    nextPage,
    prevPage,
    currentPage,
    setCurrentPage,
  };
};

// [].slice( 2 - 1 * 10 , 2 * 10)
// [].slice( 10 , 20)

// 1 -1 * 5 --> 0
// 2 -1 *5 --> 5

// 102
// 10

// 102 / 10 ---> 10

// Math.round( 2.7)
// Math.floor( 10.2) // 10
// Math.ceil( 10.2) // 1

// [5,1,2,3,1,6,7,1,2].slice(3, 5) // una parte del array
// [3,1]
