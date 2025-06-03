import React, { useState } from "react";
import data from "../metrodata.js";
import "./About.css";

const About = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);

  const handleGetDetails = () => {
    if (!fromStation || !toStation) {
      alert("Please select both source and destination stations.");
      return;
    }

    const trips = data.filter(
      (trip) =>
        trip.start.toLowerCase() === fromStation.toLowerCase() &&
        trip.destination.toLowerCase() === toStation.toLowerCase()
    );

    if (trips.length === 0) {
      alert(`No trips found from ${fromStation} to ${toStation}`);
    }

    setFilteredTrips(trips);
  };

  const uniqueStations = Array.from(
    new Set(data.flatMap((trip) => [trip.start, trip.destination]))
  );

  return (
    <div className="trip-details-container">
      <h2>Find Trip Details</h2>
      <p>Please select your source & destination stations</p>
      <div className="dropdowns">
        <label htmlFor="from">From</label>
        <select
          id="from"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
        >
          <option value="">--Please Select--</option>
          {uniqueStations.map((station, index) => (
            <option key={index} value={station}>
              {station}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdowns">
        <label htmlFor="to">To</label>
        <select
          id="to"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
        >
          <option value="">--Please Select--</option>
          {uniqueStations.map((station, index) => (
            <option key={index} value={station}>
              {station}
            </option>
          ))}
        </select>
      </div>
      <button className="get-details-btn" onClick={handleGetDetails}>
        Get Details
      </button>
      <div className="trip-results">
        {filteredTrips.length > 0 && (
          <>
          <div className="data">
            <h3 className="dataheading">Available Trips:</h3>
            
            <table border="1">
              <thead>
                <tr>
                  <th>Train Name</th>
                  <th>Time</th>
                  <th>start</th>
                  <th>destination</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrips.map((trip, index) => (
                  <tr key={index}>
                    <td>{trip.train_Name}</td>
                    <td>{trip.time}</td>
                    <td>{trip.start}</td>
                    <td>{trip.destination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
