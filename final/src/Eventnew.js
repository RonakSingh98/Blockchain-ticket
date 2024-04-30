import { Navigate } from "react-router-dom";
import "./event.css";
import React, { useEffect, useState } from "react";

const TicketUploadForm = () => {
  const [ticketImage, setticketImage] = useState(null);
  const [ticketCost, setTicketCost] = useState("");
  const [eventName, setEventName] = useState("");
  const [showDate, setShowDate] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [ticketCreated,setTicketCreated] = useState("");

  const handleFileChange = (event) => {
    setticketImage(event.target.files[0]);
  };

  const handleTicketCostChange = (event) => {
    setTicketCost(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleTicketQuantityChange = (event) => {
    setTicketQuantity(event.target.value);
  };
  const handleShowDateChange = (event) => {
    setShowDate(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!ticketImage || !ticketCost || !eventName) {
      alert("Please fill in all fields.");
      return;
    }

    // Mock upload logic (replace with actual logic to upload the file)
    const formData = new FormData();
    formData.append("ticketImage", ticketImage);
    formData.append("price", ticketCost);
    formData.append("name", eventName);
    formData.append("showDate", showDate);
    formData.append("quantity", ticketQuantity);
    console.log(formData);
    // Simulate upload process
    // const response = await fetch("https://blockchainticketing-production.up.railway.app/ticket/create", {
    const response = await fetch("https://blockchainticketing-production.up.railway.app/ticket/create", {
      method: "POST",
      headers:{
        Authorization:`Bearer ${localStorage.getItem("jwt")}`
      },
      body: formData,
    });
    if (response.ok) {
      const {data} = await response.json();
      setTicketCreated(data)
    } else {
      console.log("error while creating ticket");
    }
  };

  useEffect(()=>{
    return ()=>{
      setTicketCreated("");
    }
  },[])

  return (
    <>
    {ticketCreated ? <Navigate to={"/"}></Navigate> : <div>
      <h2 className="headi">Ticket Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticketImage">Ticket Image:</label>
          <input
            type="file"
            id="ticketImage"
            name="ticketImage"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Ticket Cost:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={ticketCost}
            onChange={handleTicketCostChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Ticket Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={ticketQuantity}
            onChange={handleTicketQuantityChange}
            required
          />
        </div>
        <div>
          <label htmlFor="showDate">Show Date:</label>
          <input
            type="text"
            id="showDate"
            name="showDate"
            value={showDate}
            onChange={handleShowDateChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="name"
            value={eventName}
            onChange={handleEventNameChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Upload
        </button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>}
    </>
  );
};

export default TicketUploadForm;
