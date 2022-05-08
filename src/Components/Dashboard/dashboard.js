import React, { useState } from "react";
import Attendance from "../EmployeeAttendance/attendance";
import Employeelist from "../EmployeeList/employeelist";
import "./dashboard.css";

function Dashboard({ setDashboard }) {
  const [employeelist, setEmployeelist] = useState(false);
  const [attendance, setAttendance] = useState(false);

  const [employee] = useState([
    { id: "12546", name: "Jatin Yadav", email: "jatin@gmail.com" },
    { id: "12546", name: "Dheeraj Kumar", email: "dkyadav@gmail.com" },
    { id: "12546", name: "Akansha Rana", email: "akrana@gmail.com" },
    { id: "12546", name: "Parveen Yadav", email: "parveen@gmail.com" },
    { id: "12546", name: "Abhishek Sharma", email: "abhi@gmail.com" },
  ]);

  const logout = () => {
    setDashboard(false);
  };

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  };

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };
  const openHome = () => {
    setEmployeelist(false);
    setAttendance(false);
  };

  const openEmployeeList = () => {
    setEmployeelist(true);
    setAttendance(false);
  };
  const openEmployeeAttendance = () => {
    setEmployeelist(false);
    setAttendance(true);
  };
  return (
    <div className="dashboardWrapper">
      <div className="sidebar">
        <div>
          <div onClick={openHome}>Home</div>
          <div onClick={openEmployeeList}>Employees List</div>
          <div onClick={openEmployeeAttendance}>Employee Attendance</div>
          <div onClick={openForm}>Add Employee</div>
        </div>
        <div>
          <div>Settings</div>
          <div onClick={logout}>Logout</div>
        </div>
      </div>
      {!employeelist && !attendance && (
        <div className="content">
          <div className="cardwrapper">
            <div className="cardcontainer">
              <div className="userinfo">
                <h1>Welcome Admin</h1>
                <h3>Dashboard.....</h3>
              </div>
              <div className="card">
                <h3>Total Number of Employees</h3>
                <h1>534</h1>
              </div>
              <div className="card">
                <h3>Total Number of Categories </h3>
                <h1>334</h1>
              </div>
            </div>
          </div>
          <div className="tablecontainer">
            <div>
              <h3>List of Present Employees....</h3>
              <table>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
                {employee.map((obj) => {
                  return (
                    <tr>
                      <td>{obj.id}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div>
              <h3>List of Absent Employees....</h3>
              <table>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
                {employee.map((obj) => {
                  return (
                    <tr>
                      <td>{obj.id}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      )}
      {employeelist && <Employeelist />}
      {attendance && <Attendance />}
      <div className="form-popup" id="myForm">
        <div class="form-container">
          <div className="cross" onClick={closeForm}>
            X
          </div>
          <p class="sign" align="center">
            Add Employee Details
          </p>
          <form class="form1">
            <div className="inputfields">
              <div>
                <label>Employee Name</label>
                <input type="text" align="center" placeholder="Name" />
              </div>
              <div>
                <label>Employee Age</label>
                <input type="text" align="center" placeholder="Age" />
              </div>
            </div>
            <div className="inputfields">
              <div>
                <label>Date of Birth</label>
                <input type="text" align="center" placeholder="D.O.B" />
              </div>
              <div>
                <label>Contact Number</label>
                <input
                  type="text"
                  align="center"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <div className="inputfields">
              <div>
                <label>Email Id</label>
                <input type="text" align="center" placeholder="Email Id" />
              </div>
              <div>
                <label>Employee Salary</label>
                <input type="text" align="center" placeholder="Salary" />
              </div>
            </div>
            <div className="inputfields">
              <div>
                <label>Enrollment Date</label>
                <input
                  type="text"
                  align="center"
                  placeholder="EnrollmentDate"
                />
              </div>
              <div>
                <label>Employee Branch</label>
                <input type="text" align="center" placeholder="Branch" />
              </div>
            </div>
            <button className="submitbtn" onClick={closeForm}>
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
