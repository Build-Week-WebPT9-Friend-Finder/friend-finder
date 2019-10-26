const getLocalUserId = () =>
  localStorage.getItem("logged_in_user_id");

export default getLocalUserId;
