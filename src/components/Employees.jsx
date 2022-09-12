import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import './Employees.css'


const url = "https://niravkpatel28.github.io/json-data-server-v2/employees/employees.json";

const use_Navigate =  useNavigate;
const Employees = () => {
	const [team, setTeam] = useState([]);
	console.log("inside Employees--");
	const location = useLocation();
  	console.log("location",location);
	const fetchEmployees = async()=>{
		let employees = await fetch(url).then((response)=> response.json()).then((data)=>{return data;})
		setTeam(employees);
		console.log(employees);
	}

	useEffect(()=>{
		fetchEmployees();
	},[])

	return(
		<div className="employees">
		<div className="marginNav">
			{team.map((employee)=>{ 
				// console.log("employee",employee);
				return(
				<Link
				// onClick={(event)=>{
				// 			use_Navigate(`/employees/${employee.id}`,{state:{...employee}})
				// 		}}
				to={`/employees/${employee.id}`}
				state= {{ ...employee }} 
			>
				{employee.firstName} {" "} {employee.lastName}
			</Link>
			)})}
		</div>
		<div className="contentSpace">
			<h3 className="contentSpace-h1">All our Employees</h3>
			<Outlet />
		</div>
		</div>
	)
}

export default Employees;
