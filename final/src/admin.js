import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; 

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://blockchainticketing-production.up.railway.app/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-section">
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://blockchainticketing-production.up.railway.app/tickets');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="admin-section">
      <h2>Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <span>{ticket.title}</span>
            <span>{ticket.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://blockchainticketing-production.up.railway.app/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-section">
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <span>{order.user}</span>
            <span>{order.ticket}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-container">
        <Users />
        <Tickets />
        <Orders />
      </div>
    </div>
  );
};

export default AdminDashboard;
