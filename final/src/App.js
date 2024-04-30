import React, { useEffect, useState } from 'react';
import './App.css';
import Apps from './Content';
import Checkout from './checkout';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import Login from './login';
import MyOrders from './Myorders';
import TicketUploadForm from './Eventnew';
import AdminDashboard from './admin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const [user,setUser] = useState(null);
  useEffect(()=>{
    console.log(user);
  },[user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apps user={user}/>,
    },
    {
      path: "/checkout",
      element: <Checkout user={user}/>,
    },
    {
      path: "/contact",
      element: <Contact user={user}/>,
    },
    {
      path: "/login",
      element: <Login user={user} setUser={setUser}/>,
    },
    {
      path: "/orders",
      element: <MyOrders user={user}/>,
    },
    {
      path: "/newevent",
      element: <TicketUploadForm user={user}/>,
    },
    {
      path: "/admin",
      element: <AdminDashboard user={user}/>,
    },
  ]);

  return (
    <div className="App">
        {/* <Router>
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/newevent" element={<TicketUploadForm/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
    </Router> */}
      <RouterProvider router={router} />
      </div>
  );
}

export default App;
