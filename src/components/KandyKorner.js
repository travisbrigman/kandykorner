import React from "react";
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Navbar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css";


export const KandyKorner = () => (
  <>
          <NavBar />
        <ApplicationViews />
  </>
);





