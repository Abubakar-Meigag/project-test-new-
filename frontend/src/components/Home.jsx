import React from "react";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Topics from "./Topics";
import Test from "./Test";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-max sm:min-w-max">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
