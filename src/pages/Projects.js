// landing page, simple design and layout.
// hero image from my own photography
// integrate project examples
// maybe a carousel?
// maybe some sort of morphing animation?

import React, { useState, useEffect } from "react";
import "../styles/home.css";
import sites from "../utils/sites.js";
import SiteCard from "../components/SiteCard";

function Projects() {
  return (
    <div className="home">
      <div className="mx-3">
        <h1>welcome,</h1>
        <p class="intro">click on a site to learn more.</p>
      </div>
      {sites.map((site) => (
        <SiteCard key={site.title} title={site.title} text={site.text} image={site.image} link={site.link}/>
      ))}
    </div>
  );
}

export default Projects;
