import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { totalPages, handleClick, nextPage, prevPage, pages } =
    useGlobalContext();
  const pagesz = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div className="page-btn">
      <button onClick={() => prevPage()}>prev</button>
      {pagesz.map((num) => {
        return (
          <button
            onClick={() => handleClick(num)}
            className={num === pages ? "active" : ""}
          >
            {num}
          </button>
        );
      })}
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
};

export default Pagination;
