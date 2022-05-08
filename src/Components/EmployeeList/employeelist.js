import React, { useState } from "react";
import "./employeelist.css";

function Employeelist() {
  const [employee] = useState([
    {
      id: "12546",
      name: "Jatin Yadav",
      age: "20",
      mobile: "7703913871",
      email: "jatin@gmail.com",
      enroll: "12-05-2022",
      dob: "19-08-2000",
    },
    {
      id: "12546",
      name: "Dheeraj Kumar",
      age: "20",
      mobile: "7659852364",
      email: "dkyadav@gmail.com",
      enroll: "22-11-2013",
      dob: "19-08-2000",
    },
    {
      id: "12546",
      name: "Akansha Rana",
      age: "20",
      mobile: "9685741235",
      email: "akrana@gmail.com",
      enroll: "12-07-2016",
      dob: "19-08-2000",
    },
    {
      id: "12546",
      name: "Parveen Yadav",
      age: "20",
      mobile: "6655842397",
      email: "parveen@gmail.com",
      enroll: "15-10-2002",
      dob: "19-08-2000",
    },
    {
      id: "12546",
      name: "Abhishek Sharma",
      age: "20",
      mobile: "9512364870",
      email: "abhi@gmail.com",
      enroll: "12-12-2012",
      dob: "19-08-2000",
    },
  ]);
  return (
    <div className="employeeWrapper">
      <div>
        <h1>Employeelist</h1>
      </div>
      <div className="employeetable">
        <h3>List of Employees....</h3>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>D.O.B</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Enrollment Date</th>
            <th>Action</th>
          </tr>
          {employee.map((obj) => {
            return (
              <tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>{obj.dob}</td>
                <td>{obj.mobile}</td>
                <td>{obj.email}</td>
                <td>{obj.enroll}</td>
                <td>
                  <a href="#">Edit</a>,<a href="#">Delete</a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Employeelist;
