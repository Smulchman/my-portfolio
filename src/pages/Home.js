// landing page, simple design and layout.
// hero image from my own photography
// integrate project examples
// maybe a carousel?
// maybe some sort of morphing animation?

import React, { useState, useEffect } from "react";
import "../styles/home.css";
import sites from "../utils/sites.js";
import SiteCard from "../components/SiteCard";

function Home() {
  return (
    <div className="home">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
      </style>
      <div>
        <h1>welcome,</h1>
      </div>
      {sites.map((site) => (
        <SiteCard title={site.title} text={site.text} image={site.image} />
      ))}
    </div>
  );
}

export default Home;
