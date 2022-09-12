import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AssetCardVertical, Link } from "@contentstack/venus-components";

import "@contentstack/venus-components/build/main.css";

import "./Team.css";

const url =
	"https://niravkpatel28.github.io/json-data-server-v2/employees/employees.json";

const Team = () => {
	const [team, setTeam] = useState([]);

	const use_Navigate = useNavigate();

	let employees = [];
	const fetchEmployees = async () => {
		employees = await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
		setTeam(employees);
		console.log(employees);
	};

	useEffect(() => {
		fetchEmployees();
	}, []);

	return (
		<div className="allEmployees">
			{team.map((employee) => {
				return (
					<Link
						fontColor="base"
						fontSize="large"
						fontWeight="regular"
						iconName="NewTab"
						target="_blank"
						testId="cs-link"
						type="external"
						underLineType="dashed"
						underline="true"
						cbOnClick={(event)=>{
									use_Navigate(`/team/${employee.id}`,{state:{...employee}})
								}}
					>
						{employee.firstName}{employee.lastName}
					</Link>
					// <AssetCardVertical
					// 	className="teamAssetCard"
					// 	// onEditClick={handleEditClick}
					// 	// onFullScreenClick={handleFullScreenClick}
					// 	// onDeleteClick={handleDeleteClick}
					// 	onCardClick={(event)=>{
					// 		use_Navigate(`/team/${employee.id}`,{state:{...employee}})
					// 	}}
					// 	title={employee.firstName}
					// 	assetType='image'
					// 	size={500000}
					// 	height={300}
					// 	width={300}
					// 	assetUrl={employee.imageUrl}
					// />
					// <div key={employee.id}>
					// 	<h3

					// 	id={employee.id}
					// 	onClick={(event)=>{
					// 		use_Navigate(`/team/${employee.id}`,{state:{...employee}})
					// 	}}
					// 	>
					// 		{employee.firstName}
					// 	</h3>
					// </div>
				);
			})}
		</div>
	);
};
export default Team;
