import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Signup = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status, user]);

  return (
    <React.Fragment>
      <h1>Sign Up to Find Friends</h1>
      <div className="form-container">
        <Form>
          <label>Name</label>
          <Field type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && <p>{errors.name}</p>}

          <label>Email</label>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}

          <label>Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}

          <button type="submit" value="Login">
            Submit!
          </button>
        </Form>
      </div>
      <p className="login-signup-meta">
        <small>
          Already have an account?{" "}
          <Link to="/login">Sign in here</Link>.
        </small>
      </p>
    </React.Fragment>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, password, email }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string()
      .required()
      .min(8),
    email: Yup.string()
      .required()
      .email(),
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
