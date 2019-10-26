/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

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

const Signup = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status, user]);

  return (
    <React.Fragment>
      <h1 css={headingStyles}>Sign Up to Find Friends</h1>
      <div css={formStyles}>
        <Form>
          <label>Name</label>
          <Field text="type" name="name" placeholder="Name" />
          {touched.name && errors.name && <p>{errors.name}</p>}

          <label>Email</label>
          <Field text="type" name="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}

          <label>Password</label>
          <Field text="type" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}

          <label>Date of Birth</label>
          <Field text="type" name="dob" placeholder="Date of Birth" />

          <button type="submit" value="Login">
            Submit!
          </button>
        </Form>
      </div>
      <p css={paraStyles}>
        <small>
          Already have an account?{" "}
          <Link to="/login">Sign in here</Link>.
        </small>
      </p>
    </React.Fragment>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, password, email, dob }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      dob: dob || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required(),
    email: Yup.string().required(),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/register`,
        values,
      )
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err));
  },
});

const UserFormWithFormik = formikHOC(Signup);

export default UserFormWithFormik;
