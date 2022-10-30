import React from "react";
import { Link, Outlet } from "react-router-dom";

const People = ({ user }) => {
  return (
    <div>
      <div key={user.login.uuid}>
        <img src={user.picture.large} />

        <p>{`Full Name:${user.name.first} ${user.name.last}`}</p>

        <Link to={`/users/${user.login.uuid}`}>more details</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default People;
