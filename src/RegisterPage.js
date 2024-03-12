// // src/RegisterPage.js
// import React, { useState } from 'react';

// function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle registration logic here, such as sending data to a backend server
//     console.log('Registration submitted:', { username, email, password });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegisterPage;

// src/RegisterPage.js
import React, { useState } from 'react';
import HeaderComponent from './Component/HeaderComponent';
import TextComponent from './Component/TextComponent';
import EmailComponent from './Component/EmailComponent';
import PasswordComponent from './Component/PasswordComponent';
import ButtonComponent from './Component/ButtonComponent';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration submitted:', { username, email, password });
  };

  return (
    <div className="auth-container">
      <HeaderComponent text="Register" />
      <form onSubmit={handleSubmit}>
        <TextComponent label="Username:" value={username} onChange={(e) => setUsername(e.target.value)} />
        <EmailComponent value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordComponent value={password} onChange={(e) => setPassword(e.target.value)} />
        <ButtonComponent text="Register" />
      </form>
    </div>
  );
}

export default RegisterPage;