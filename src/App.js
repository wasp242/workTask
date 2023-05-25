import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./pages/About";
import { More } from "./pages/More";
import { User } from "./components/User";
import { Navibar } from "./components/Navibar";

export const App = () => {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
};
