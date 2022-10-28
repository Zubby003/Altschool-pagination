import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section>
      <h1>oops! it's a dead end</h1>
      <Link to="/">back home</Link>
    </section>
  );
};
