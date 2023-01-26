import { Box } from "@mui/material";
import { height } from "@mui/system";
import path from "path";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "./../components/Navbar";
import StartList from "./../Pages/StartList";

function AuthLayout() {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/StartList"} element={<StartList />}></Route>
      </Routes>
    </Box>
  );
}

export default AuthLayout;
