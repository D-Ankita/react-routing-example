import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import EmployeeDetails from '../components/EmployeeDetails';
import Employees from '../components/Employees';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Team from '../components/Team';

const Routing = ()=>{
	return(
		<BrowserRouter >
		<Navigation />
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/about' element={<About />}></Route>
			<Route path='/team' element={<Team />} ></Route>
			<Route path='/team/:empId' element={ <EmployeeDetails /> }></Route>
			<Route path='/employees' element={ <Employees /> }>
				{/* <Route path=':' element={ <Team />  }></Route> */}
				<Route path=':empId' element={ <EmployeeDetails /> }></Route>
			</Route>
			<Route path='/contactUs' element={<ContactUs />} ></Route>
		</Routes>
		</BrowserRouter>
	)
}

export default Routing;