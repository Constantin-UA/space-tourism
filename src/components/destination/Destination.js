import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useCallback, useState, useEffect } from 'react';
import img from '../../assets/destination/image-moon.png';
import './destination.scss';
function Destination(props) {
	const { name, images, description, distance, travel } = props.data.destinations[0];

	return (
		<section className="destination">
			<Container className="destination-wrapper">
				<div className="destination-title heading-5">01 Pick your destination</div>
				<Row>
					<Col className="destination-col-left">
						<img src={img} alt="planet img" className="destination-img" />
					</Col>
					<Col className="destination-col-right">
						<Nav activeKey="MOON" onSelect={(selectedKey) => console.log(selectedKey)}>
							<Nav.Item>
								<Nav.Link eventKey="MOON">MOON</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="MARS">MARS</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="EUROPA">EUROPA</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="TITAN">TITAN</Nav.Link>
							</Nav.Item>
						</Nav>
						<div className="destination-descr-wrapper">
							<div className="destination-descr-title">MOON</div>
							<div className="destination-descr-text">
								See our planet as you’ve never seen it before. A perfect relaxing trip away to help
								regain perspective and come back refreshed. While you’re there, take in some history
								by visiting the Luna 2 and Apollo 11 landing sites.
							</div>
							<br />
							<div className="destination-descr-footer">
								<div className="destination-descr-distance">
									<div className="destination-descr-distance-title">AVG. DISTANCE</div>
									<div className="destination-descr-distance-subtitle">384,400 KM</div>
								</div>
								<div className="destination-descr-time">
									<div className="destination-descr-time-title">EST. TRAVEL TIME</div>
									<div className="destination-descr-time-subtitle">3 DAYS</div>
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

{
	/* 						<div className="destination-tabs-wrapper">
							<div className="destination-tabs-title">{name.toString().toUpperCase()}</div>
							<div className="destination-tabs-descr">{description}</div>
							<img src={tabsline} alt="line" className="destination-tabs-line" />
							<div className="destination-tabs-wrapper">
								<div className="destination-tabs--item">Avg. distance {distance}</div>
								<div className="destination-tabs--item">Est. travel time {travel}</div>
							</div>
						</div> */
}
