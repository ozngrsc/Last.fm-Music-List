import React, { useEffect, useState } from "react";
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

  return <div className="row container">Artist Detail Page</div>;
}

export default ArtistDetail;
