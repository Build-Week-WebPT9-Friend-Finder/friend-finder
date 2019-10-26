/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import store from "../index";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import { LOGIN_USER } from "../actions/login";
import getUser from "../utils/getUser";

const headingStyles = css`
  margin: 1.5rem auto;
  text-align: center;
`;

const formStyles = css`
  margin: 1rem auto;
  max-width: 20rem;
  width: 100%;

  form {
    margin: 0 auto;
    width: 100%;
  }
`;

const paraStyles = css`
  margin: 1rem auto;
  text-align: center;
  width: 50%;
`;

const Login = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status, user]);

  return (
    <React.Fragment>
      <h1 css={headingStyles}>
        Sign in to Your Friend Finder Account
      </h1>
      <div css={formStyles}>
        <Form>
          <label>Email</label>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <ErrorMsg message={errors.email} />
          )}

          <label>Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />

          {touched.password && errors.password && (
            <ErrorMsg message={errors.password} />
          )}
          <button type="submit" value="Login">
            Submit!
          </button>
        </Form>
      </div>
      <p css={paraStyles}>
        <small>
          Need an account? <Link to="/signup">Sign up here</Link>.
        </small>
      </p>
    </React.Fragment>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required(),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`,
        values,
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.token);
        localStorage.setItem("logged_in_user_id", res.data.user_id);
        getUser(res.data.user_id).then(user => {
          store.dispatch({
            type: LOGIN_USER,
            payload: { user, loggedIn: true },
          });
        });
      })
      .catch(err => console.error(err));
  },
});

const UserFormWithFormik = formikHOC(Login);

export default UserFormWithFormik;
