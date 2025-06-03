import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [selectedStation, setSelectedStation] = useState("");

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
  };

  const handleExploreClick = () => {
    if (selectedStation) {
      document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="left">
          <h1>Explore Metro Stations</h1>
          <p>
            Find more about each Metro station from the drop-down list. Click
            ‘Explore’ to know about the location and landmarks near the station.
          </p>
          <div className="input-group">
            <select name="stations" value={selectedStation} onChange={handleStationChange}>
              <option value="" disabled>
                Select a station
              </option>
              <option value="miyapuri">Miyapuri</option>
              <option value="LB nagar">LB nagar</option>
              <option value="erragadda">Erragadda</option>
              <option value="ESI hospital">ESI hospital</option>
              <option value="secundarbad">Secundarbad</option>
              <option value="KPHB colony">KPHB colony</option>
              <option value="Kukatpally">Kukatpally</option>
            </select>
          </div>
          <button className="button" onClick={handleExploreClick} disabled={!selectedStation}>
            Explore
          </button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://www.ltmetro.com/wp-content/uploads/2021/03/Network-Map-small-min.jpg"
          alt="Metro Illustration"
          className="metro-image"
        />
      </div>
      <div className="buttompage" id="scroll">
        <ul>
          <li>
            Miyapuri
            <p>
              <h1>Station Address</h1>Near Ysr Ap State Museum,Road,Public Gardens,Red Hills,Lakdikapul,Hyderabad,Telengana.
            </p>
          </li>
          <li>
            LB nagar
            <p>
              <h1>Station Address</h1>Snehapuri Colony,LB Nagar,Hyderabad,Telengana
            </p>
          </li>
          <li>
            Erragadda
            <p>
              <h1>Station Address</h1>Sanath Nagar Rd,Czech Colony,Sanath Nagar,Hyderabad,Telengana 5000018
            </p>
          </li>
          <li>
            ESI hospital
            <p>
              <h1>Station Address</h1>Opposite ESI bus stop,Sanath Nagar,Erragadda,Hyderabad Telengana 500038
            </p>
          </li>
          <li>
            Secundarbad
            <p>
              <h1>Station Address</h1>Secundarbad Railway Station Rd,Railway Officer Colony,Botihuda,Telengana 500025
            </p>
          </li>
          <li>
            KPHB colony
            <p>
              <h1>Station Address</h1>Mumbai highway,Bhagya Nagar Colony,Kukatpally,Hyderabad Telengana 500072
            </p>
          </li>
          <li>
            Kukatpally
            <p>
              <h1>Station Address</h1>Kukatpally,M J Colony,Balaji Nagar,Telengana 500072
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
