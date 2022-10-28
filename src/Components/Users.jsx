import React from "react";
import AllUsers from "./AllUsers.jsx";
import Pagination from "./Pagination";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div className="app">
        <AllUsers />
        <Pagination />
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Users;
