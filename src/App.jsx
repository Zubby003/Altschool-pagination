import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";
import Details from "./Components/Details";
import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="users/:cell" element={<UserDetails />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
