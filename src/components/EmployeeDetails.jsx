import { useLocation } from "react-router";
import { AssetCardVertical } from "@contentstack/venus-components";
import './EmployeeDetails.css'

const EmployeeDetails = () => {
	const location = useLocation();
  console.log("location",location);
  const {
    state: {company,email,position,hobbies,skills, firstName, lastName, imageUrl },
  } = location;
	return (
		<div className="EmployeeDetailsCard">
		<div ><p>{"Company :" + company}</p>
		<p>{"Email :" + email}</p>
		<p>{"position :" + position}</p>
		<p>{"skills :" + skills}</p>
		<p>{"hobbies :" + hobbies}</p></ div>
		<AssetCardVertical
			className="teamAssetCard"
			// onEditClick={handleEditClick}
			// onFullScreenClick={handleFullScreenClick}
			// onDeleteClick={handleDeleteClick}
			// onCardClick={handleClick}
			title={firstName + " " + lastName}
			assetType="image"
			// size={500000}
			height={600}
			width={600}
			assetUrl={imageUrl}
		/>
		</div>
	);
};
export default EmployeeDetails;
