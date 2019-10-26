import { axiosWithAuth } from "../component/axiosWithAuth";
import getLocalUserId from "./getLocalUserId";

const getUser = async id => {
  const userId = id ? id : getLocalUserId();
  const res = await axiosWithAuth().get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/user/${userId}`,
  );

  const { data } = await res;

  return {
    id: data.user_id,
    name: data.name,
    email: data.email,
    dob: data.dob,
    gender: data.gender,
    coordinates: data.coordinates,
    location: data.location,
    profile_img: data.profile_img,
    bio: data.bio,
  };
};

export default getUser;
