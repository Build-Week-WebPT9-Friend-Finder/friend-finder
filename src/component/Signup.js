import React from 'react';
import { useFormState } from 'react-use-form-state';
import { axiosWithAuth } from './axiosWithAuth';

export default function Signup({ onSubmit }) {
  const [formState, { text, email, password }] = useFormState();

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/login')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input {...text('name')} required />

      <label htmlFor="email">Email</label>
      <input {...email('email')} required />

      <label htmlFor="password">Password</label>
      <input {...password('password')} required minLength="8" />

      <label htmlFor="date">Date of birth</label>
      <input {...text('date')} required />
      <button>Submit</button>
    </form>
  );
}