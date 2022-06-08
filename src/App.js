import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
