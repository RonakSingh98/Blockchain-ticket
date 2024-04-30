import React, { useState, useEffect } from 'react';
import './orders.css';
import { Navigate } from 'react-router-dom';

const MyOrders = ({user}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if(!user) return;
        // const response = await fetch('https://blockchainticketing-production.up.railway.app/user/orders', {
        const response = await fetch('https://blockchainticketing-production.up.railway.app/user/orders', {
          method: 'GET',
          headers:{
            Authorization:`Bearer ${localStorage.getItem("jwt")}`
          }
        });
        if (!response.ok) {
          console.log("cannot fetch orders");
        }
        else{
          const {data} = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []); // Run once when component mounts

  return (
    <>
    {!user && <Navigate to={"/"}></Navigate>}
    <div>
      <h2 className="headi">My Orders</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>OrderId</th>
            <th>Ticket</th>
            <th>Amount</th>
            <th>Show Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length ? orders.map((order,ind) => (
            <tr key={order._id}>
              <td>{ind+1}</td>
              <td>{order._id}</td>
              <td>{order.ticket_id.name}</td>
              <td>${order.amount}</td>
              <td>{new Date(order.ticket_id.showDate).toLocaleDateString()}</td>
            </tr>
          )): ""}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MyOrders;
