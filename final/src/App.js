import React, { useEffect, useState } from 'react';
import './App.css';
import Apps from './Content';
import Checkout from './checkout';
import Contact from './Contact';
import Login from './login';
import MyOrders from './Myorders';
import TicketUploadForm from './Eventnew';
import AdminDashboard from './admin';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [initialPath, setInitialPath] = useState('/login');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('jwt');
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      setInitialPath('/');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    setInitialPath('/login');
  };

  const router = createBrowserRouter([
    { path: '/', element: user ? <Apps user={user} onLogout={handleLogout} /> : <Navigate to="/login" /> },
    { path: '/checkout', element: user ? <Checkout user={user} /> : <Navigate to="/login" /> },
    { path: '/contact', element: user ? <Contact user={user} /> : <Navigate to="/login" /> },
    { path: '/login', element: <Login user={user} setUser={setUser} /> },
    { path: '/orders', element: user ? <MyOrders user={user} /> : <Navigate to="/login" /> },
    { path: '/newevent', element: user ? <TicketUploadForm user={user} /> : <Navigate to="/login" /> },
    { path: '/admin', element: user ? <AdminDashboard user={user} /> : <Navigate to="/login" /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} initialEntries={[initialPath]} />
    </div>
  );
}

export default App;
