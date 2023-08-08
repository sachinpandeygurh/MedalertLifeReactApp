import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import proxy from "../utils";
const UserQuery = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      
      let d = await axios.get(`${proxy}/api/contact/data-contact-medalert`);
      setData(d?.data?.query);
    } catch (error) {
    }
  };
  return (
    <div className="container mt-3">
      <h2 className="m-auto text-center my-2">User Query</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="col-md-1">Sno.</th>
            <th className="col-md-2">Name</th>
            <th className="col-md-2">Email</th>
            <th className="col-md-1">Mobile No</th>
            <th className="col-md-4">Message</th>
            <th className="col-md-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.firstname +" "+item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
              <td>
                {new Date(item.updatedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserQuery;

