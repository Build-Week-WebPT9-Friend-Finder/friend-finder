import React, { useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/users";

function Home({ getAllUsers, users, isFetching, error }) {
  useEffect(() => {
    axiosWithAuth()
      .get("/user")
      .then(res => {
        getAllUsers();
      })
      .catch(err => {
        console.log(err);
      });
  }, [getAllUsers]);

  if (isFetching) {
    return <div>Fetching your data</div>;
  }

  return (
    <div>
      <h1>List of Users</h1>
      <>
        {users.map(user => (
          <div key={user.user_id}>
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <p>{user.dob}</p>
            <p>{user.gender}</p>
            <p>{user.location}</p>
          </div>
        ))}
      </>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers },
)(Home);
