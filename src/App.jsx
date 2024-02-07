import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { StatHeader } from "./styles";
export default function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="movies" />} />
          <Route path="movies" element={<StatHeader>hello</StatHeader>} />
          <Route path="movie/:id" element={<h1>movie id</h1>} />
          <Route path="actor/:id" element={<h1>movie id</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
