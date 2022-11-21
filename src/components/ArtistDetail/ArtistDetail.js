import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ArtistDetail.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function ArtistDetail({ darkMode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [topImage, setTopImage] = useState("");
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const albumData = async () => {
      setIsLoading(true);
      await axios
        .get(
          `/2.0/?method=artist.gettopalbums&artist=${params.name}&api_key=880cee3e3b509bee34a5d0c56758b51f&format=json&limit=999`
        )
        .then((response) => {
          setTopAlbums(response.data.topalbums.album);
          setTopImage(response.data.topalbums.album[0].image[2]["#text"]);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };
    albumData();
    const trackData = async () => {
      setIsLoading(true);
      await axios
        .get(
          `/2.0/?method=artist.gettoptracks&artist=${params.name}&api_key=880cee3e3b509bee34a5d0c56758b51f&format=json&limit=999`
        )
        .then((response) => {
          setTopTracks(response.data.toptracks.track);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };
    trackData();
  }, [params.name]);

  return (
    <div className="row container">
      <div className="col-12 d-flex align-items-center border border-secondary border-2 rounded mb-4 p-0 bg-secondary">
        <div className="col-3 d-flex justify-content-center align-items-center py-1 px-4">
          {isLoading ? (
            <div className="spinner-border text-light m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <img src={topImage} className="img-fluid rounded" alt="Artist" />
          )}
        </div>
        <div className="col-9">
          <h1 className="card-text fw-bold ">{params.name}</h1>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 p-0">
        <h5
          className={
            darkMode
              ? "light-header border-bottom border-secondary border-3 pb-2 me-3"
              : "border-bottom border-secondary border-3 pb-2 me-3"
          }
        >
          Top Albums
        </h5>
        {isLoading ? (
          <div className="spinner-border text-secondary m-5 p-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="topAlbums mt-3">
            {topAlbums.map((album, index) => (
              <Card
                key={index}
                heading={album.name}
                name={album.artist.name}
                image={album.image[2]["#text"]}
                playcount={`${album.playcount} play`}
                topAlbums
              />
            ))}
          </div>
        )}
      </div>
      <div className="col-sm-12 col-md-6 p-0 mt-4 mt-md-0">
        <h5
          className={
            darkMode
              ? "light-header border-bottom border-secondary border-3 pb-2 me-3"
              : "border-bottom border-secondary border-3 pb-2 me-3"
          }
        >
          Top Tracks
        </h5>
        {isLoading ? (
          <div className="spinner-border text-secondary m-5 p-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="topTracks mt-3">
            {topTracks.map((track, index) => (
              <Card
                key={index}
                heading={track.name}
                name={track.artist.name}
                image={track.image[2]["#text"]}
                listeners={`${track.listeners} play`}
                topAlbums
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArtistDetail;
