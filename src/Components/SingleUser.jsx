import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleUser = () => {
  const { cell } = useParams();
  const url = "https://randomuser.me/api/?page=3&results=50&seed=abc";
  const [details, setDetails] = useState([]);
  console.log(details);
  React.useEffect(() => {
    const FetchDetails = async () => {
      const res = await axios.get(`${url}${cell}`);
      // console.log(res);
      if (res.data.results) {
        const {
          gender: gender,
          email: email,
          picture: { large },
          name: { first, last },
        } = res.data.results[0];
        const newD = {
          gender,
          email,
          large,
          first,
          last,
        };
        setDetails(newD);
      } else {
        setDetails(null);
      }
    };
    FetchDetails();
  }, [cell]);

  const { gender, email, large, first, last } = details;
  return (
    <section className="app">
      <div className="user">
        <img src={large} />
        <h3>{`FullName: ${first} ${last}`}</h3>
        <h3>{`Gender: ${gender}`}</h3>
        <h3>{`Email: ${email}`}</h3>

        <Link to="/users">back to users</Link>
      </div>
    </section>
  );
};

export default SingleUser;
