// Admin Dashboard
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const UserList = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let data = await axios.get(`/api/booking/Bookingdata`);
    // console.log(data?.data);
    if (data?.data) {
      setUsers(data?.data);
    }
    // console.log(user);                     
  };
  // console.log(user);                    
  return (
    <>
      <div className="container mt-3">
        <h2 className="m-auto text-center my-2">User List</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone No</th>
              <th>Ambulance Type</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {user.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.phoneNo}</td>
                <td>{item.ambulanceType}</td>
                <td>{item.currentDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserList;
