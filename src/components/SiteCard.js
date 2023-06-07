import React from "react";
import "../styles/sitecard.css";

function SiteCard( site ) {
// const handleLink = () => {
//   window.open(site.link, "_blank");
//   console.log(site.link);
// }

  return (
    <div class="card text-white bg-dark sitecard">
      <a href={site.link} target="_blank">
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
