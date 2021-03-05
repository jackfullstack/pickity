import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TAfuYAxGAAbyP4CGylt2Kh1Np_KebPIDtTWVTgpc9q0",
  },
});
