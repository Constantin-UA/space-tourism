import React, { useState } from 'react';
import { useEffect } from 'react';
import './planetGroup.scss';
function PlanetGroup(props) {
	const [rSelected, setRSelected] = useState(1);

	useEffect(() => {
		console.log(rSelected);
	}, [rSelected]);
	return (
		<ul className="planet-tabs">
			<li className="planet-item" onClick={() => setRSelected(1)}>
				MOON
			</li>
			<li className="planet-item" onClick={() => setRSelected(2)}>
				MARS
			</li>
			<li className="planet-item" onClick={() => setRSelected(3)}>
				EUROPA
			</li>
			<li className="planet-item" onClick={() => setRSelected(4)}>
				TITAN
			</li>
		</ul>
	);
}

export default PlanetGroup;
