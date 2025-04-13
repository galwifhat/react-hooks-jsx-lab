import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>Well, Well, Well, look who is here!</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
