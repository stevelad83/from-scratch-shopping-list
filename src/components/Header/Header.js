import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      <h1>I am header!</h1>

      {user && (
        <nav>
          <p>Hello {user.email}</p>
          <button onClick={handleLogOut}>Sign-out</button>
        </nav>
      )}
    </header>
  );
}
