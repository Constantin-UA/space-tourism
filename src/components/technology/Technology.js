import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import imgT1 from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import imgT2 from '../../assets/technology/image-space-capsule-portrait.jpg';
import imgT3 from '../../assets/technology/image-spaceport-portrait.jpg';

import './technology.scss';
function Technology(props) {
	const onClick = (e) => {
		let value = e.target.innerHTML - 1;
		setSelectKey(value);
		switchButton(e, 'active-btn');
		switchClassImg(value, '.technology-right');
	};
	const tImages = [imgT1, imgT2, imgT3];
	const tImagesClass = ['r-image-1', 'r-image-2', 'r-image-3'];
	const [selectedKey, setSelectKey] = useState(0);
	const { name, description } = props.data.technology[selectedKey];
	const switchButton = (event, cl) => {
		const elem = event.target.parentElement.childNodes;
		elem.forEach((item) => item.classList.remove(cl));
		event.target.classList.add(cl);
	};
	const switchClassImg = (value, cl) => {
		const elem = document.querySelector(cl);
		elem.classList.add(tImagesClass[value]);
		switch (value) {
			case 0:
				elem.classList.remove(tImagesClass[value + 1]);
				elem.classList.remove(tImagesClass[value + 2]);
				break;
			case 1:
				elem.classList.remove(tImagesClass[value - 1]);
				elem.classList.remove(tImagesClass[value + 1]);
				break;
			case 2:
				elem.classList.remove(tImagesClass[value - 1]);
				elem.classList.remove(tImagesClass[value - 2]);
				break;
			default:
				console.log('Error');
				break;
		}
	};

	return (
		<div className="technology" id="technology">
			<Container className="technology-container">
				<div className="technology-title heading-5">03 SPACE LAUNCH 101</div>
				<Row className="technology-wrapper">
					<Col className="technology-left">
						<Col className="technology-buttons-wrapper">
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
						<Col className="technology-descriptions">
							<div className="technology-subheader body-text">THE TERMINOLOGY...</div>
							<div className="technology-header heading-3">{name.toUpperCase()}</div>
							<div className="technology-body-text body-text">{description}</div>
						</Col>
					</Col>
					<Col className="technology-right">
						<img src={tImages[selectedKey]} alt="img" className="technology-img" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Technology;
