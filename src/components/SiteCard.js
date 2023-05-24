import React from "react";

function SiteCard(site) {
  return (
    <div class="card text-bg-dark">
      <a href={site.link}>
        <img src={site.image} class="card-img" alt="placeholder"></img>
        <div class="card-img-overlay">
          <h5 class="card-title">{site.title}</h5>
          <p class="card-text">{site.text}</p>
        </div>
      </a>
    </div>
  );
}

export default SiteCard;
