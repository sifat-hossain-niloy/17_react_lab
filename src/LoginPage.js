// // src/LoginPage.js
// import React, { useState } from 'react';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle login logic here, such as verifying credentials
//     console.log('Login submitted:', { username, password });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
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
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

// src/LoginPage.js
import React, { useState } from 'react';
import HeaderComponent from './Component/HeaderComponent';
import TextComponent from './Component/TextComponent';
import PasswordComponent from './Component/PasswordComponent';
import ButtonComponent from './Component/ButtonComponent';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if username and password match the predefined credentials
    if (username === 'admin' && password === '1234') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="auth-container">
      <HeaderComponent text="Login" />
      <form onSubmit={handleSubmit}>
        <TextComponent label="Username:" value={username} onChange={(e) => setUsername(e.target.value)} />
        <PasswordComponent value={password} onChange={(e) => setPassword(e.target.value)} />
        <ButtonComponent text="Log In" />
        {/* Display message */}
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
