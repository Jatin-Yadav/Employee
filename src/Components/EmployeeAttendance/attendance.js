import React, { useState } from "react";
import "./attendance.css";

function Attendance() {
  const [employee, setEmployee] = useState([
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
    <div className="attendancewrapper">
      <div className="searchWraper">
        <h3>Search Employee Attendance</h3>
        <div className="inputfields">
          <div>
            <label>Employee Id</label>
            <input type="text" align="center" placeholder="Employee Id" />
          </div>
          <div>
            <label>Month</label>
            <input type="date" align="center" placeholder="Month" />
          </div>
        </div>
        <button className="searchbtn" onClick={"closeForm"}>
          Search
        </button>
      </div>
      <div className="searchresult">
        <table>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th> Date</th>
            <th>Present/Absent</th>
          </tr>
          {employee.map((obj) => {
            return (
              <tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.enroll}</td>
                <td>{obj.mobile}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Attendance;
