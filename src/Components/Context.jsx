import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { USER_PER_PAGE } from "../Utils/Constants";
const url = "https://randomuser.me/api/?page=3&results=50&seed=abc";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const FetchUsers = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setLoading(false);
    // const { humans } = res.data.results;
    // setUsers(res.data.results);
    // console.log(users);
    setUsers(res.data.results);

    setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
  };
  useEffect(() => {
    FetchUsers();
  }, []);
  const handleClick = (num) => {
    setPages(num);
  };
  const nextPage = () => {
    setPages((prev) => prev + 1);
    if (!pages.length) {
      setDisabled(true);
    }
  };
  const prevPage = () => {
    setPages((prev) => prev - 1);
    if (pages === 1) {
      setDisabled(true);
    }
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        users,
        pages,
        totalPages,
        handleClick,
        nextPage,
        prevPage,
        disabled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
