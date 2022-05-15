import React from "react";
import { Promo } from "../Promo";
import { AboutProject } from "../AboutProject";
import { Techs } from "../Techs";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";

export const Main = () => {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};
