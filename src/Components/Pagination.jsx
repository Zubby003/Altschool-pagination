import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { totalPages, handleClick, nextPage, prevPage, pages, loading } =
    useGlobalContext();
  const pagesz = [...Array(totalPages).keys()].map((num) => num + 1);
  if (loading) {
    return <h1>Loading...</h1>;
  }
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
