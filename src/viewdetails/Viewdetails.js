import React, { useState } from "react";
import "./Viewdetails.css";

export default function Viewdetails() {
  const [cardNumber, setCardNumber] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const data = [
    {
      // profil: <img src="D:\my pics\Pictures\.thumbnails\98.jpg" alt="profile" />,
      Cardnumber: "11",
      Name: "Srinu",
      Email: "srinumalapati@45email.com",
      city: "Miyapur, Hyderabad,Telangana",
      from: "Miyapur",
      To: "LB nagar",
      fare: "30$",
    },
    {
      Cardnumber:"12",
      Name:"venu",
      Email:"venumalapari@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"Erragadda",
      fare:"30$"
  },
  {
      Cardnumber:"13",
      Name:"anji",
      Email:"anji@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"SR nagar",
      fare:"30$"
  },
  {
      Cardnumber:"14",
      Name:"ramesh",
      Email:"ramesh@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  {
      Cardnumber:"15",
      Name:"ARUN",
      Email:"arun@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  {
      Cardnumber:"16",
      Name:"babu",
      Email:"babumalapati@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"secundarabad",
      fare:"30$"
  },
  {
      Cardnumber:"17",
      Name:"sai",
      Email:"sairam@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  {
      Cardnumber:"18",
      Name:"mani",
      Email:"mani@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  {
      Cardnumber:"19",
      Name:"ashok",
      Email:"ashok@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  {
      Cardnumber:"10",
      Name:"sai ram",
      Email:"sairam@45email.com",
      city:"Miyapur,Hyderabad,Telangana",
      from:"Miyapur",
      To:"LB nagar",
      fare:"30$"
  },
  ];

  const handleInputChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleButtonClick = () => {
    const result = data.find((item) => item.Cardnumber === cardNumber);
    setFilteredData(result);
  };

  return (
    <>
      <div className="view">
        <label>Cardnumber</label>
        <input
          type="text"
          name="cardnumber"
          value={cardNumber}
          onChange={handleInputChange}
          required
        />
        <button onClick={handleButtonClick}>Get details</button>
      </div>
      <div>
        {filteredData ? (
          <table>
            <tbody>
              {/* <tr>
                <th>Profile</th>
                <td>{filteredData.profil}</td>
              </tr> */}
              <tr>
                <th>Cardnumber</th>
                <td>{filteredData.Cardnumber}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{filteredData.Name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{filteredData.Email}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{filteredData.city}</td>
              </tr>
              <tr>
                <th>From</th>
                <td>{filteredData.from}</td>
              </tr>
              <tr>
                <th>To</th>
                <td>{filteredData.To}</td>
              </tr>
              <tr>
                <th>Fare</th>
                <td>{filteredData.fare}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h3>Please enter a valid card number.</h3>
        )}
      </div>
    </>
  );
}
