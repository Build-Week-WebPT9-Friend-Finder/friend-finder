import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const Login = ({ errors, touched, status }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <label>Email</label>
        <Field text="type" name="email" placeholder="Eamil" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <label>Password</label>
        <Field text="type" name="password" placeholder="Password" />

        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit" value="Login">Submit!</button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users.message}</p>
      ))}
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://friend-finder-levi.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.token);
      })
      .catch(err => console.error(err));
  }
});

const UserFormWithFormik = formikHOC(Login);

export default UserFormWithFormik;