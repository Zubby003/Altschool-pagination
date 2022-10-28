import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const People = ({ user }) => {
  return (
    <div>
      <div>
        <img src={user.picture.large} />

        <p>{`Full Name:${user.name.first} ${user.name.last}`}</p>

        <Link to={`/users/${user.cell}`}>more details</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default People;
