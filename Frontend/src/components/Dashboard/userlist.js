// Admin Dashboard
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";
const UserList=()=> {
const[user , setUsers]= useState([])

const params = useParams();
console.log(params.Phone_number);
console.log(params.phone);
useEffect(()=>{
  getUsers()
},[])

const id =localStorage.getItem("id");
// const idd =JSON.parse(id);
const getUsers =async()=>{
 let data= await axios.get(`http://localhost:5000/Bookingdata/${params.phoneNo}`);
 console.log(data);
 if(data){
  setUsers(data);
 }
}


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
       {user.map((item,index)=>{
        <tr key={user._id}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.phoneNo}</td>
        <td>{item.ambulanceType}</td>
        <td>{item.currentDate}</td>
      </tr>
       }
       )}
        
      </tbody>
    </Table>
    </div>



    </>
  );
}

export default UserList;
