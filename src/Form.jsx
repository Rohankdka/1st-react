import React from 'react';

const Form = ({ formType }) => {
  return (
    <div>
      <h2>{formType === 'login' ? 'This is Login' : 'This is Register'}</h2>
      {formType === 'register' && (
        <input type='text' placeholder='Username' name='username' required />
      )}
      <input type='text' placeholder='Email' name='email' required />
      <input type='password' placeholder='Password' name='password' required />
      {formType === 'register' && (
        <input type='password' placeholder='Confirm Password' name='confirmPassword' required />
      )}
      <button>{formType === 'login' ? 'Login' : 'Register'}</button>
    </div>
  );
}

export default Form

// import React from 'react'

// export default function Form({formType}) {
//   return (
//     <div>
//       <h2>{formType === 'login' ? 'This is Login' : 'This is Register'}</h2>
//       {formType === 'register' && (
//         <input type='text' placeholder='Username' name='username' required />
//       )}
//       <input type='text' placeholder='Email' name='email' required />
//       <input type='password' placeholder='Password' name='password' required />
//       {formType === 'register' && (
//         <input type='password' placeholder='Confirm Password' name='confirmPassword' required />
//       )}
//       <button>{formType === 'login' ? 'Login' : 'Register'}</button>
//     </div>
//   )
// }

