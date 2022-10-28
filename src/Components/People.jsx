import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const People = ({ user }) => {
  // const { userid } = useParams();
  // console.log(user.cell);
  return (
    <div>
      <div>
        {/* <h4>{userid}</h4> */}
        <img src={user.picture.large} />

        <p>{`Full Name:${user.name.first} ${user.name.last}`}</p>
        <p>{`Email:${user.email}`}</p>
        <p>{`Phone:${user.phone}`}</p>
        <Link to={`/users/${user.cell}`}>more details</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default People;
