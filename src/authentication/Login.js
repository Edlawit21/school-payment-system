import React, { useState } from 'react';
import './Login.css'; 

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'abebe' && password === 'dls') {
      onLogin(username); 
    } else {
      alert('Incorrect username or password');
    }
  };
  return (
    <div className='login-page'>
      <div className='year'>
        <span>School Year</span>
        <select>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
        </select>
      </div>
      <div className='center'>
        <h1 className='login-h1'>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='input-user'>
            <label >Username:</label>
            <input className='txt_field' type="text" placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required/>
            </div>
            <div>
            <label >Password:</label>
            <input className='txt_field' type="password" placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
            </div>
            <div>
            <button className='login-btn'>SIGN IN</button>
            </div>
        </form>
      </div>
    </div>
    
      
        
        
     
  );
};

export default Login;
