import React from "react";
import "../styles/sitecard.css";

function SiteCard(site) {
  return (
    <div class="card text-white bg-dark sitecard">
      <a href={site.link}>
        <div class="card-body">
          <h5 class="card-title">{site.title}</h5>
          <p class="card-text">{site.text}</p>
        </div>
        <img src={site.image} class="card-img" alt="placeholder"></img>
      </a>
    </div>
  );
}

export default SiteCard;
