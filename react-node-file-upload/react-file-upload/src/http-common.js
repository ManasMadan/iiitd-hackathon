import axios from "axios";

export default axios.create({
  baseURL: "https://iiitd-hackathon.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});
