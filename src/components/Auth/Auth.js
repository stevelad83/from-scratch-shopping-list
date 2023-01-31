import React from 'react';
import { useContext, useState } from 'react';

import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth.js';
import { UserContext } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to="/tasks" />;
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
      console.log('user', user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth box">
      <NavLink to="/auth/sign-in">Sign in</NavLink>
      <NavLink to="/auth/sign-up">Sign up</NavLink>
      <form onSubmit={submitAuth}>
        <label>Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
