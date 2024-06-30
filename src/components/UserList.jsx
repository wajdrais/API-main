import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserList() {
  const color = [
    "#E6B0AA",
    "#D7BDE2",
    "#707B7C",
    "#A3E4D7 ",
    "#F5B7B1 ",
    "#F1948A",
    "#008080",
    "#E5E7E9",
    "#00FFFF",
    "#A3E4D7",
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => setUsers(e.data));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {users.map((e, i) => (
        <Card
          style={{ width: "37rem", padding: "10px", backgroundColor: color[i] }}
        >
          <div style={{ textAlign: "left", fontSize: "10px" }}>
            <h6>
              <span>Username :</span>
              {e.username}
            </h6>
            <h6>
              <span>Email :</span>
              {e.email}
            </h6>
            <h6>
              <span>Adress :</span>
              {e.address.street +
                e.address.sweet +
                e.address.city +
                e.address.zipcode}
            </h6>
            <h6>
        <span>Adress geo :</span>
        {e.address.geo.lat + e.address.geo.lng}
      </h6>
      <h6>
        <span>Phone :</span>
        {e.phone}
      </h6>
      <h6>
        <span>Web Site :</span>
        {e.website}
      </h6>
      <h6>
        <span>Company :</span>
        {e.company.name + e.company.catchPhrase + e.company.bs}
      </h6>
          <Button variant="primary">Go detail</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default UserList;
