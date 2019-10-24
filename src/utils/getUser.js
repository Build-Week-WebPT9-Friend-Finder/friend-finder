import { axiosWithAuth } from "../component/axiosWithAuth";

const getUser = async id => {
  const res = await axiosWithAuth().get(
    `https://friend-finder-levi.herokuapp.com/api/user/${id}`,
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
