import { React } from "react";
import { useFetch } from "../useFetch";
// import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";
import { FeaturedRelease } from "./release/featuredRelease";

import "../../public/css/index.css";
export const Index = () => {
  return (
    <>
      <NavBar />
      <div class="container text-center indexContainer">
        <div class="row">
          <div class="col col-8">
            <h2>Featured release</h2>
            <FeaturedRelease />
          </div>
          <div class="col"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
