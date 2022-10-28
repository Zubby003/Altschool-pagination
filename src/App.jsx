import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import Home from "./Components/Home";
import SingleUser from "./Components/SingleUser";
import Users from "./Components/Users";
import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:cell" element={<SingleUser />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
