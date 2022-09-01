import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import imgT1 from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import imgT2 from '../../assets/technology/image-space-capsule-portrait.jpg';
import imgT3 from '../../assets/technology/image-spaceport-portrait.jpg';
import './technology.scss';
function Technology(props) {
	const onClick = (e) => {
		setSelectKey(e.target.innerHTML - 1);
		const elem = e.target.parentElement.childNodes;
		elem.forEach((item) => item.classList.remove('active-btn'));
		e.target.classList.add('active-btn');
	};
	const tImages = [imgT1, imgT2, imgT3];
	const [selectedKey, setSelectKey] = useState(0);
	const { name, description } = props.data.technology[selectedKey];
	return (
		<div className="technology">
			<Container className="technology-container">
				<div className="technology-title heading-5">03 SPACE LAUNCH 101</div>
				<Row className="technology-wrapper">
					<Col className="technology-left-col">
						<Col className="technology-left-left-col">
							<button onClick={(e) => onClick(e)} className="technology-button active-btn">
								1
							</button>
							<button onClick={(e) => onClick(e)} className="technology-button">
								2
							</button>
							<button onClick={(e) => onClick(e)} className="technology-button">
								3
							</button>
						</Col>
						<Col className="technology-left-right-col">
							<div className="technology-subheader body-text">THE TERMINOLOGY...</div>
							<div className="technology-header heading-3">{name.toUpperCase()}</div>
							<div className="technology-body-text body-text">{description}</div>
						</Col>
					</Col>
					<Col className="technology-right-col">
						<img src={tImages[selectedKey]} alt="img" className="technology-img" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Technology;
