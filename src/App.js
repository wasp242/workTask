import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./pages/About";
import { More } from "./pages/More";
import { Header } from "./components/Header";
import { User } from "./components/User";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
};
