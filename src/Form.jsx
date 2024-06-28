import React from 'react';
import './Form.css';

const Form = ({ formType }) => {
  return (
    <div className="container">
      <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
      <input type='text' placeholder='Email' name='Email' required />
      <input type='text' placeholder='Username' name='username' required />
      <input type='password' placeholder='Password' name='password' required />
      {formType === 'register' && (
        <input type='password' placeholder='Confirm Password' name='confirmPassword' required />
      )}
      <button>{formType === 'login' ? 'Login' : 'Register'}</button>
    </div>
  );
}

export default Form;
