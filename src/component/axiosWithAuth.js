import axios from "axios";

export const axiosWithAuth = () => {
  const auth_token = localStorage.getItem("auth_token");

  return axios.create({
    baseURL: "https://friend-finder-levi.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// "Authorization": auth_token,
