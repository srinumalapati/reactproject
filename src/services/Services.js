import React, { useState } from "react";
import './Service.css';

export default function Service() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [ticketType, setTicketType] = useState("Single Journey");
  const [ticketCount, setTicketCount] = useState(1); // Start ticket count at 1
  const [fare, setFare] = useState(10); // Default fare for one ticket

  const handleTicketCountChange = (delta) => {
    setTicketCount((prevCount) => {
      const newCount = Math.max(1, prevCount + delta); // Ensure count stays at or above 1
      setFare(newCount * 10); // Update fare based on the new count
      return newCount;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${fare} successful!`);
  };

  return (
    <div className="services-container">
      <h1 className="underline">TICKET BOOKING</h1>
      <form onSubmit={handleSubmit} className="services-form">
        <label>
          Origin:
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="services-select"
            required
          >
            <option value="">Select Origin</option>
            <option value="MIYAPUR">MIYAPUR</option>
            <option value="SR NAGAR">SR NAGAR</option>
          </select>
        </label>
        <br />
        <label>
          Destination:
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="services-select"
            required
          >
            <option value="">Select Destination</option>
            <option value="LB NAGAR">LB NAGAR</option>
            <option value="ERRAGADA">ERRAGADA</option>
          </select>
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="services-input"
            required
          />
        </label>
        <br />
        <label>
          Ticket Type:
          <select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            className="services-select"
            required
          >
            <option value="Single Journey">Single Journey</option>
            <option value="Round Trip">Round Trip</option>
          </select>
        </label>
        <br />
        <label>
          Number of Tickets:
          <button
            type="button"
            onClick={() => handleTicketCountChange(-1)}
            className="services-button"
          >
            -
          </button>
          <span className="ticket-count">{ticketCount}</span>
          <button
            type="button"
            onClick={() => handleTicketCountChange(1)}
            className="services-button"
          >
            +
          </button>
        </label>
        <br />
        <p>Total Fare: ₹{fare}</p>
        <button type="submit" className="services-submit">
          Make Payment
        </button>
      </form>
    </div>
  );
}
