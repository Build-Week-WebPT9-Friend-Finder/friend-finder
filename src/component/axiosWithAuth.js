import axios from "axios";
import getToken from "../utils/getToken";

export const axiosWithAuth = () => {
  const auth_token = getToken();

  return axios.create({
    baseURL: "https://friend-finder-levi.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth_token,
    },
  });
};
