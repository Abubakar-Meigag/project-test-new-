import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Topics from "./Topics";
import Test from "./Test";
import Footer from "./Footer";
import Login from "./Login";
import Profile from "./Profile";

const Home = () => {
  return (
    <div className="min-h-max sm:min-w-max">
      <BrowserRouter>
        <Nav />
        <Login />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Profile />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
