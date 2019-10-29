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
  CardImage,
  CardExtra,
} from "./UI/Card";
import ButtonRow from "./UI/ButtonRow";
import ButtonPrimary from "./UI/Button/ButtonPrimary";
import ButtonDanger from "./UI/Button/ButtonDanger";

function Home({ getAllUsers, users, login }) {
  useEffect(() => {
    axiosWithAuth()
      .get("/user")
      .then(res => {
        getAllUsers();
      })
      .catch(err => {
        console.error(err);
      });
  }, [getAllUsers]);

  if (users.isFetching) {
    return <div>Fetching your data</div>;
  }

  return (
    <div>
      <h1>Find New Friends</h1>
      <Cards>
        {users.users.map(user => (
          <Card key={user.email}>
            <CardImage img={user.profile_img || ""}></CardImage>
            <CardContent>
              <CardHeader>
                {user.name}
                <CardMeta style={{ fontWeight: "normal" }}>
                  {user.gender} from {user.location}
                </CardMeta>
              </CardHeader>
              <CardDescription>{user.bio}</CardDescription>
              <CardExtra>Born on {user.dob}</CardExtra>
              <ButtonRow>
                <ButtonPrimary>Request</ButtonPrimary>
                <ButtonDanger>Reject</ButtonDanger>
              </ButtonRow>
            </CardContent>
          </Card>
        ))}
      </Cards>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    login: state.login,
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers },
)(Home);
