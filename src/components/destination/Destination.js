import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';
import './destination.scss';
function Destination(props) {
	const [planet, setPlanet] = useState(0);
	const imgPlanets = [moonImg, marsImg, europaImg, titanImg];
	const { name, description, distance, travel } = props.data.destinations[planet];
	const navItem = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
	console.log(name);
	return (
		<section className="destination" id="destination">
			<Container className="destination-wrapper">
				<div className="destination-title heading-5">01 PICK YOUR DESTINATION</div>
				<Row className="destination-row-wrapper">
					<Col className="destination-col-left">
						<img src={imgPlanets[planet]} alt="planet img" className="destination-img" />
					</Col>
					<Col className="destination-col-right">
						<Nav className="destination-nav" onSelect={(selectedKey) => setPlanet(selectedKey)}>
							{navItem.map((item, idx) => {
								if (idx === 0) {
								}
								return (
									<Nav.Item className="destination-nav-item" key={idx}>
										<Nav.Link className="destination-nav-item-link nav-text" eventKey={idx}>
											{item}
										</Nav.Link>
									</Nav.Item>
								);
							})}
						</Nav>
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
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Destination;
