import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import store from "../index";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import { LOGIN_USER } from "../actions/login";

const Login = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status, user]);

  return (
    <>
      <h1>Sign in to Your Friend Finder Account</h1>
      <div className="form-container">
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
      <p className="login-signup-meta">
        <small>
          Need an account? <Link to="/signup">Sign up here</Link>.
        </small>
      </p>
    </>
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
        store.dispatch({
          type: LOGIN_USER,
          payload: res.data.user,
        });
      })
      .catch(err => console.error(err));
  },
});

const UserFormWithFormik = formikHOC(Login);

export default UserFormWithFormik;
