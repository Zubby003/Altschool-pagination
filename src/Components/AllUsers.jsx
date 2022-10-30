import React from "react";
import { useGlobalContext } from "./Context";
import People from "./People";

const AllUsers = () => {
  const { users, pages, postsPerPage } = useGlobalContext();

  const startIndex = (pages - 1) * postsPerPage;
  const seletedUsers = users.slice(startIndex, startIndex + postsPerPage);
  return seletedUsers.map((user) => {
    return (
      <div className="user">
        <People user={user} key={user.login.uuid} />
      </div>
    );
  });
};

export default AllUsers;
