import axios from "axios";
import getToken from "../utils/getToken";

const axiosWithAuth = () => {
  const auth_token = getToken();

  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: auth_token,
    },
  });
};

export default axiosWithAuth;
export { axiosWithAuth };
