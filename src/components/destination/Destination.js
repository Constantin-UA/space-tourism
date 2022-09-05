import { Container, Row, Col } from 'react-bootstrap';

import { Route, Routes, NavLink } from 'react-router-dom';

import { useState } from 'react';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';
import './destination.scss';
function Destination(props) {
	const [planet, setPlanet] = useState(0);
	const destinationDate = props.data;
	const imgPlanets = [moonImg, marsImg, europaImg, titanImg];
	const planetImgSet = (n) => {
		setPlanet(n);
	};
	return (
		<section className="destination" id="destination">
			<Container className="destination-wrapper">
				<div className="destination-title heading-5">01 PICK YOUR DESTINATION</div>
				<Row className="destination-row-wrapper">
					<Col className="destination-col-left">
						<img src={imgPlanets[planet]} alt="planet img" className="destination-img" />
					</Col>
					<Col className="destination-col-right">
						<Navigation planetImgSet={planetImgSet} />
						<Routes>
							<Route path="/" element={<View data={destinationDate.destinations[0]} />} />
							<Route path="mars" element={<View data={destinationDate.destinations[1]} />} />
							<Route path="europa" element={<View data={destinationDate.destinations[2]} />} />
							<Route path="titan" element={<View data={destinationDate.destinations[3]} />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
const View = ({ data }) => {
	const { name, description, distance, travel } = data;
	return (
		<>
			<div className="destination-descr-wrapper">
				<div className="destination-descr-title heading-2">{name.toUpperCase()}</div>
				<div className="destination-descr-text body-text">{description}</div>
				<div className="destination-descr-footer">
					<div className="destination-descr-distance">
						<div className="destination-descr-distance-title subheading-2">AVG. DISTANCE</div>
						<div className="destination-descr-distance-subtitle subheading-1">
							{distance.toUpperCase()}
						</div>
					</div>
					<div className="destination-descr-time">
						<div className="destination-descr-time-title subheading-2">EST. TRAVEL TIME</div>
						<div className="destination-descr-time-subtitle subheading-1">
							{travel.toUpperCase()}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const Navigation = ({ planetImgSet }) => {
	const navItem = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

	return (
		<>
			<ul className="destination-nav">
				{navItem.map((item, idx) => {
					if (idx === 0) {
					}
					return (
						<li onClick={() => planetImgSet(idx)} className="destination-nav-item" key={idx}>
							<NavLink
								className="destination-nav-item-link nav-text"
								to={`/destination/${idx === 0 ? '' : item.toLowerCase()}`}
								style={({ isActive }) => ({ color: isActive ? '#fff' : '#d0d6f9' })}
							>
								{item}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</>
	);
};
export default Destination;
