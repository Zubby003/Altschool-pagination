import React from "react";
import { useGlobalContext } from "./Context";
// import LoadingImage from "../..assets/loading.gif";
import LoadingImage from "../assets/loading.gif";

const Pagination = () => {
  const { totalPages, handleClick, nextPage, prevPage, pages, loading } =
    useGlobalContext();
  const pagesz = [...Array(totalPages).keys()].map((num) => num + 1);
  if (loading) {
    return (
      <div className="loading-state">
        <img src={LoadingImage} alt="Loading" />
      </div>
    );
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
