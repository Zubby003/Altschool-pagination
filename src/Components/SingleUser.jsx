import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingImage from "../assets/loading.gif";
import { useGlobalContext } from "./Context";

const SingleUser = () => {
  const { users, loading } = useGlobalContext();
  const { id } = useParams();

  const NewArray = users.find((val) => {
    return val.login.uuid === id;
  });

  // console.log(users);

  const {
    gender: gender,
    email: email,
    picture: { large },
    name: { first, last },
  } = NewArray;

  return (
    <section className="app">
      <div className="user">
        <img src={large} />
        <p>{`FullName: ${first} ${last}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Email: ${email}`}</p>

        <Link to="/users">back to users</Link>
      </div>
    </section>
  );
};

export default SingleUser;
