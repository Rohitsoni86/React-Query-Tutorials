import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NormalReactQ from "./pages/NormalReactAxios/NormalReactQ";
import ReactQueryFetch from "./pages/ReactQueryFetch/ReactQueryFetch";
import AppHome from "./pages/AppHome";
import Home from "./pages/HomePage/HomePage";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppHome />}>
          <Route  path="/home" element={<Home />} />
          <Route  path="/normalquery" element={<NormalReactQ />} />
          <Route  path="/reactquery" element={<ReactQueryFetch />} />
        </Route>
      </Routes>
    </>
  );
}