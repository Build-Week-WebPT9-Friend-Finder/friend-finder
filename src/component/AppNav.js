/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { NavLink } from "react-router-dom";
import { primaryDark, greyLight } from "../sass/_colors.scss";

const styles = css`
  display: flex;
  justify-content: space-around;
  margin-right: 4rem;
  width: 35%;

  a {
    color: black;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    width: 4rem;

    &:hover {
      color: ${primaryDark};
      border-bottom-color: ${greyLight};
    }
  }
`;

const activeStyle = {
  borderBottom: "solid 3px #fff",
  paddingBottom: ".25rem",
};

const AppNav = ({ auth }) => {
  return (
    <nav css={styles}>
      {auth ? (
        <React.Fragment>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>

          <NavLink
            className="logout"
            exact
            to="/logout"
            activeStyle={activeStyle}
          >
            Logout
          </NavLink>
        </React.Fragment>
      ) : null}
    </nav>
  );
};

export default AppNav;
