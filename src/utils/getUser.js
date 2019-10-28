import { axiosWithAuth } from "../component/axiosWithAuth";
import getLocalUserId from "./getLocalUserId";

const getUser = async id => {
  const userId = id ? id : getLocalUserId();
  const res = await axiosWithAuth().get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${userId}`,
  );

  const { data } = await res;

  return data;
};

export default getUser;
