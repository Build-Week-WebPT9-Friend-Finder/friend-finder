import React, { useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/users";
import Cards from "./UI/Cards";
import Card, {
  CardHeader,
  CardContent,
  CardMeta,
  CardDescription,
  CardAvatar,
} from "./UI/Card";

function Home({ getAllUsers, users, login }) {
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

  if (users.isFetching) {
    return <div>Fetching your data</div>;
  }

  return (
    <div>
      <h1>List of Users</h1>
      <Cards>
        {users.users.map(user => (
          <Card key={user.user_id}>
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <p>{user.dob}</p>
            <p>{user.gender}</p>
            <p>{user.location}</p>
          </Card>
        ))}
      </Cards>
      <h2>Logged In User</h2>
      {login ? (
        <Card>
          <CardContent>
            <CardHeader>
              <CardAvatar
                style={{ marginRight: "8px" }}
                img="https://randomuser.me/api/portraits/men/75.jpg"
              />
              {login.name}
              <CardMeta>Email: {login.email}</CardMeta>
            </CardHeader>
            <CardDescription>Born on {login.dob}</CardDescription>
          </CardContent>
        </Card>
      ) : (
        <div>No user logged in! That's not supposed to happen...</div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    login: state.login,
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers },
)(Home);
