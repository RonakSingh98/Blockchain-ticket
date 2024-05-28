import React from 'react';

function Header({ user, onLogout }) {
  return (
    <header className="App-header">
      {user && (
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
