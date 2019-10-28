import { setState } from "react";
import { useSelector } from "react-redux";
import axiosWithAuth from "../component/axiosWithAuth";

const useUserData = () => {
  // Get the actual user data from Redux
  const login = useSelector(state => state.login);
  // initialize local state
  const [user] = setState(login);
  const [userData, setUserData] = setState({});
  // Expose that user so related data can be fetched and used in relation

  const fetchUserData = async (endpoint, dataKey) => {
    const res = await axiosWithAuth.get(endpoint);

    setUserData({ [dataKey]: res.data });
  };

  const postUserData = async (endpoint, postData, dataKey) => {
    const res = await axiosWithAuth.post(endpoint, postData);

    setUserData({ [dataKey]: res.data });
  };

  return [user, userData, fetchUserData, postUserData];
};

export default useUserData;
