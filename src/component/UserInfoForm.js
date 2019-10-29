import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import store from "../index";
import ErrorMsg from "./ErrorMsg";
import getLocalUserId from "../utils/getLocalUserId";
import { UPDATE_USER } from "../actions/login";
import getToken from "../utils/getToken";

const UserInfoForm = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [user, status]);

  return (
    <div className="form-container">
      <Form>
        <label>Gender:</label>
        <Field
          name="gender"
          placeholder="Your gender..."
          type="text"
        />
        {touched.gender && errors.gender && (
          <ErrorMsg message={errors.gender} />
        )}
        <label>Location:</label>
        <Field
          name="location"
          placeholder="Your location..."
          type="text"
        />
        {touched.location && errors.location && (
          <ErrorMsg message={errors.location} />
        )}
        <label>Profile Pic:</label>
        <Field
          name="profile_img"
          placeholder="Web address for a pic of you..."
          type="text"
        />
        {touched.profile_img && errors.profile_img && (
          <ErrorMsg message={errors.profile_img} />
        )}
        <label>Date of Birth:</label>
        <Field name="dob" type="date" />
        {touched.dob && errors.dob && (
          <ErrorMsg message={errors.dob} />
        )}
        <label>Personal Bio:</label>
        <Field
          name="bio"
          placeholder="Share some information for your profile..."
          component="textarea"
          rows={8}
        />
        {touched.bio && errors.bio && (
          <ErrorMsg message={errors.bio} />
        )}
        <button type="submit" value="UserInfo">
          Go to Step 2
        </button>
        <p className="login-signup-meta">
          <small>
            <Link to="/">Go to match center</Link> if not redirected.
          </small>
        </p>
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ gender, location, profile_img, dob, bio }) {
    return {
      gender: gender || "",
      location: location || "",
      profile_img: profile_img || "",
      dob: dob || "",
      bio: bio || "",
    };
  },
  validationSchema: Yup.object().shape({
    gender: Yup.string().required(),
    location: Yup.string().required(),
    profile_img: Yup.string().required(),
    dob: Yup.date().required(),
    bio: Yup.string().required(),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    const headers = {
      Authorization: getToken(),
      "Content-Type": "application/json",
    };

    axios
      .put(
        `${
          process.env.REACT_APP_BACKEND_BASE_URL
        }/users/${getLocalUserId()}`,
        values,
        { headers },
      )
      .then(res => {
        console.log(res.data);
        store.dispatch({
          type: UPDATE_USER,
          payload: res.data,
        });
      })
      .catch(err => console.error(err));
  },
});

const UserInfoFormWithFormik = formikHOC(UserInfoForm);

export default UserInfoFormWithFormik;
