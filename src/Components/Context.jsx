import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://randomuser.me/api/?page=3&results=50&seed=abc";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const FetchUsers = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setLoading(false);

    setUsers(res.data.results);

    setTotalPages(Math.ceil(res.data.results.length / postsPerPage));
  };
  useEffect(() => {
    FetchUsers();
  }, []);
  const handleClick = (num) => {
    setPages(num);
  };
  const nextPage = () => {
    setPages((prev) => (prev === totalPages ? prev : prev + 1));
  };
  const prevPage = () => {
    setPages((prev) => (prev === 1 ? prev : prev - 1));
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
        postsPerPage,
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
