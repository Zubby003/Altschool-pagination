import React from "react";
import { USER_PER_PAGE } from "../Utils/Constants";
import { useGlobalContext } from "./Context";
import People from "./People";

const AllUsers = () => {
  const { users, pages, loading } = useGlobalContext();
  console.log(users);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const startIndex = (pages - 1) * USER_PER_PAGE;
  const seletedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  return seletedUsers.map((user) => {
    return (
      <div className="user">
        <People user={user} key={user.login.uuid} />
      </div>
    );
  });
};

export default AllUsers;
