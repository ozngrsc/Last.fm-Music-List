import React, { useEffect, useState } from "react";
import "./TopArtists.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import axios from "../../axios";

function TopArtists({ darkMode }) {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios
        .get(
          `/2.0/?method=chart.gettopartists&api_key=880cee3e3b509bee34a5d0c56758b51f&format=json&limit=999`
        )
        .then((response) => {
          setArtists(response.data.artists.artist);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };
    data();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div className="mb-4">
        <h2 className={darkMode ? "light-header" : undefined}>
          Top Artists List
        </h2>
      </div>
      {isLoading ? (
        <div className="spinner-border text-secondary m-5 p-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="topArtists border border-3 border-secondary p-4 rounded ">
          {artists?.map((artist, index) => (
            <Link
              to={`/detail/${artist.name}`}
              key={index}
              className="text-decoration-none text-reset"
            >
              <Card
                heading="Artist"
                name={artist.name}
                listeners={`Listeners: ${artist.listeners}`}
                playcount={`Playcount: ${artist.playcount}`}
                image={artist.image[1]["#text"]}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopArtists;
