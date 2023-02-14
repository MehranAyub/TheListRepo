import { Box } from "@mui/material";
import { height } from "@mui/system";
import path from "path";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MakeList from "../Pages/MakeList";
import Navbar from "./../components/Navbar";
import StartList from "./../Pages/StartList";

function AuthLayout() {
  return (
    <Box sx={{ backgroundColor: "black", height: "auto" }}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/StartList"} element={<StartList />}></Route>
        <Route path={"/MakeList"} element={<MakeList />}></Route>
      </Routes>
    </Box>
  );
}

export default AuthLayout;
