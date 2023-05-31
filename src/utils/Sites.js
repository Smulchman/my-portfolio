// this file is to provide an array of objexts containing information about the sites that I'm highlighting with the portfolio

import gameboxd from "../assets/gameboxd.png";
import historwe from "../assets/historwe.png";

const sites = [
    {
        title: "Gameboxd",
        text: "A social media and review website for video games.",
        image: gameboxd,
        // I know it's really annoying that the link is 'gameboxed' and the actual site is 'gameboxd' but gameboxd was already taken on heroku and I thought this was funny.
        link: "https://gameboxed.herokuapp.com/"
    },
    {
        title: "Historwe",
        text: "A simple social media focused on historical events.",
        image: historwe,
        link: "https://calm-castle-61617.herokuapp.com/"
    }
];

export default sites;