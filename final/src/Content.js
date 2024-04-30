import React, { useEffect, useState } from 'react'
import photo1 from './images/ab.jpg';
import photo2 from './images/pngegg.png';
import photo3 from './images/main.jpg';
import p1 from './images/1.jpg'
import p2 from './images/2.jpg'
import p3 from './images/3.jpg'
import p4 from './images/4.jpg'
import p5 from './images/5.jpg'
import p6 from './images/6.jpg'
import p7 from './images/7.jpg'
import p8 from './images/8.jpg'
import p9 from './images/9.jpg'
import p10 from './images/10.jpg'
import { Link, useNavigate } from "react-router-dom";
import './content.css'
import { Buffer } from 'buffer';

window.Buffer = Buffer;

const Content = ({user}) => {

  const [tickets,setTickets] = useState   ([]);
  const navigate = useNavigate();

  const gotToNewPage = (ticketId) => {
    // window.location.to = '/checkout';
    navigate(`/checkout?ticketId=${ticketId}`);
  };

  const convertToUrl = (dataObj)=>{
    const {buffer,mimeType} = dataObj;
    const b = Buffer.from(buffer.data);
    const blob = new Blob([b],{mimetype:mimeType});
    return URL.createObjectURL(blob);
  }

  useEffect(()=>{
    (async ()=>{
      // const response = await fetch("https://blockchainticketing-production.up.railway.app/ticket/tickets")
    const response = await fetch("https://blockchainticketing-production.up.railway.app/ticket/tickets");
    if(response.ok){
      const {data} = await response.json();
      setTickets(data);
    }
    })()
  },[])
  return (
    
    <div>
      <nav>
      <ul>
        {/* <li><Link to="#">My Profile</Link></li> */}
        <li><Link to="#s1">Home</Link></li>
        {!user && <li><Link to="/login">Login</Link></li>}
        {user && <li><Link to="/orders">My Orders</Link></li>}
        <li><Link to="/contact">Contact Us</Link></li>
        {user && user.role=== 'admin' && <li><Link to="/admin">Admin Dashboard</Link></li>}
        {user && user.role === 'vendor' && <li><Link to="/newevent">Sell Tickets</Link></li>}
        
      </ul>
      </nav>
      <div>
        <div className='main'>
          <h3 className='heading'>Your One Destination For Entertainment</h3>
        </div>
      </div>
      <div>
          <h3 className='hh'>Popular Events </h3>
        <div className='pop' id='s1'>
          {tickets && tickets.map((ticket)=>(
            <div>
            <h3 className='head'>Music Concert</h3>
            <img className='photos' src={convertToUrl(ticket.image)}></img>
            <h4>{ticket.name}</h4>
            <h4>{new Date(ticket.showDate).toDateString()}</h4>
            <button onClick={()=>gotToNewPage(ticket.ticketId)} className='small-button'>{ticket.price} Rs</button>
          </div>
          ))}
        </div>
        <h3 className='hh'>Upcoming Events </h3>
        <div className='Upcoming'>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p7}></img>
            <h4>Fusion Fiesta</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p8}></img>
            <h4>Mystic Melodies</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p9}></img>
            <h4>Soulful Serenade</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p10}></img>
            <h4>Rhythmic Revelry</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content