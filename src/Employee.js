import React from "react";

function Employee({ name, surn, secn, salary }) {
	return <p>
		name: <span>{name}</span>,
        surn: <span>{surn}</span>
        second-name: <span>{secn}</span>
		salary: <span>{salary}</span>
	</p>;
}
export default Employee;