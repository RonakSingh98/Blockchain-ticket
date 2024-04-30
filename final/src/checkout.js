import React, { useEffect, useState } from 'react';
import './checkout.css'
import { Navigate, useSearchParams } from 'react-router-dom';
const Checkout = ({user}) => {
  // Function to handle form submission
  const [searchParams] = useSearchParams();
  let ticketId = searchParams.get('ticketId');
  ticketId = parseInt(ticketId);
  const[ticketPurchase,setTicketPurchase] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blockchainticketing-production.up.railway.app/ticket/buy",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("jwt")}`
      },
      body:JSON.stringify({ticketId})
    });
    if(response.ok){
      setTicketPurchase(true);
    }
    else{
      console.log("error while purchasing ticket");
    }
  };

  useEffect(()=>{
    return ()=>{
      setTicketPurchase(false);
    }
  })

  return (
    <>
    {ticketPurchase && <Navigate to={"/orders"}></Navigate>}
    {!user && <Navigate to={"/"}></Navigate>}
    {!ticketId && <Navigate to={"/"}></Navigate>}
    <div className="checkout-container">
        
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
    </>
  );
}

export default Checkout;
