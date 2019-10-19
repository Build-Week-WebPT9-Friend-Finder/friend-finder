// import React from 'react';
// import { useFormState } from 'react-use-form-state';
// import { axiosWithAuth } from './axiosWithAuth';

// export default function Signup({ onSubmit }) {
//   const [formState, { text, email, password }] = useFormState();

//   function handleSubmit(e) {
//     e.preventDefault();
//     axiosWithAuth()
//       .post('/auth/login',{ headers: {
//         "Content-Type": "application/json"
//       }})
//       .then(res => {
//         console.log(res)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input {...text('name')} required />

//       <label htmlFor="email">Email</label>
//       <input {...email('email')} required />

//       <label htmlFor="password">Password</label>
//       <input {...password('password')} required minLength="8" />

//       <label htmlFor="date">Date of birth</label>
//       <input {...text('date')} required />
//       <button>Submit</button>
//     </form>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import styled from 'styled-components';

const Button = styled.button`
  background: black;
  border-style: solid;
  border-color: black;
  color: white;
  
`;

const Signup = ({ errors, touched, status }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Form>
        <label>Name</label>
        <Field text="type" name="name" placeholder="Name" />
        {touched.name && errors.name && <p>{errors.name}</p>}

        <label>Email</label>
        <Field text="type" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <label>Password</label>
        <Field text="type" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <label>Date of Birth</label>
        <Field text="type" name="dob" placeholder="Date of Birth" />

        <Button type="submit" value="Login">Submit!</Button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users.username}</p>
      ))}
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ name, password, email, dob }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      dob: dob || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required(),
    email: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://friend-finder-levi.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err));
  }
});

const UserFormWithFormik = formikHOC(Signup);

export default UserFormWithFormik;