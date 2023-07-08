import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserDash = () => {
  const [users, setUsers] = useState([]);
  const id = localStorage.getItem("id");
  const idd = JSON.parse(id);
  //console.log(idd,'abhishek sang shrishti');
  //  //console.log(idd.phoneNo)
  // const phone_number = localStorage.getItem();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let result = await axios.get(
      `/Bookingdata/${idd.phoneNo}`
    );
    //console.log(result);
    if (result) {
      setUsers(result?.data);
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="m-auto text-center my-2">My Bookings</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Ambulance Type</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user, index) => (
            <>
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.address}</td>
                <td>{user?.phoneNo}</td>
                <td>{user?.ambulanceType}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserDash;
