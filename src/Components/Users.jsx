import React from "react";
import AllUsers from "./AllUsers";
import Pagination from "./Pagination";

const Users = () => {
  return (
    <>
      <div className="app">
        <AllUsers />
        <Pagination />
      </div>
    </>
  );
};

export default Users;
