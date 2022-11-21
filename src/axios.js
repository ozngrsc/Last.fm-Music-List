import axios from "axios";

const instance = axios.create({
  baseURL: "https://ws.audioscrobbler.com",
});

export default instance;
