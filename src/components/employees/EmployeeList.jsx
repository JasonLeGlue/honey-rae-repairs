import { useState, useEffect } from "react";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";
import { getStaffUsers } from "../../services/userService.js";
import "./Employees.css";
export const EmployeeList = () => {
  //make list of employees an empty useState
  //use Effect to populate employees state from getStaffUsers
  //use .map() on state?, pass that as user prop for User function

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`}>
            <User user={employeeObj} />
          </Link>
        );
      })}
    </div>
  );
};
