import { Link } from "react-router-dom";
import './Navigation.css'
 const Navigation =()=>{
	return(
		<div>
			<nav>
				<h5><Link to="/"> Home</Link></h5>
				<h5><Link to="/about">About Us</Link></h5>
				<h5><Link to="/team">Team</Link></h5>
				<h5><Link to="/employees">Employees</Link></h5>
				<h5><Link to="/contactUs"> Contact Us</Link></h5>
			</nav>
		</div>
	)
 }

 export default Navigation;