import { Container, Row, Col, Nav } from 'react-bootstrap';

import capImg from '../../assets/crew/image-douglas-hurley.png';
import specialistImg from '../../assets/crew/image-mark-shuttleworth.png';
import pilotImg from '../../assets/crew/image-victor-glover.png';
import engineerImg from '../../assets/crew/image-anousheh-ansari.png';

import './crew.scss';
import { useState } from 'react';
const Crew = (props) => {
	const [crewSelect, setCrewSelect] = useState(0);
	const navItem = [1, 2, 3, 4];
	const crewImgs = [capImg, specialistImg, pilotImg, engineerImg];
	const { name, role, bio } = props.data.crew[crewSelect];
	return (
		<section className="crew">
			<Container className="crew-wrapper">
				<div className="crew-title heading-5">02 Meet your crew</div>
				<Row className="crew-row-wrapper">
					<Col className="crew-col-left">
						<div className="crew-wrapper-descrip">
							<div className="crew-role heading-4">{role.toUpperCase()}</div>
							<div className="crew-name heading-3">{name.toUpperCase()}</div>
							<div className="crew-bio body-text">{bio}</div>
						</div>
						<Nav
							className="crew-nav"
							defaultActiveKey={0}
							onSelect={(selectedKey) => setCrewSelect(selectedKey)}
						>
							{navItem.map((item, idx) => {
								return (
									<Nav.Item className="crew-nav-item" key={idx}>
										<Nav.Link className="crew-nav-item-link nav-text" eventKey={idx}></Nav.Link>
									</Nav.Item>
								);
							})}
						</Nav>
					</Col>
					<Col className="crew-col-right">
						<img src={crewImgs[crewSelect]} alt="planet img" className="crew-img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Crew;
