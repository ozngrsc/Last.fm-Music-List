import React, { useEffect, useState } from "react";
import "./TopArtists.css";
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

  return <div>Top Artists List</div>;
}

export default TopArtists;
