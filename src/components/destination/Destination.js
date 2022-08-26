import imgUrl from '../../assets/destination/image-moon.png';
import tabsline from '../../assets/destination/tabs-line.png';
import PlanetGroup from '../planetGroup/PlanetGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { useCallback, useState, useEffect } from 'react';
import './destination.scss';
function Destination(props) {
	const { name, images, description, distance, travel } = props.data.destinations[0];

	const getImage = useCallback(() => {
		console.log('fetching');

		return imgUrl;
	}, [imgUrl]);

	return (
		<section className="destination">
			<div className="destination-title heading-5">01 Pick your destination</div>
			<Container className="destination-wrapper">
				<Row>
					<Col className="destination-col-left">
						<DestinationSlide getImage={getImage} />
					</Col>
					<Col className="destination-col-right">
						<PlanetGroup />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

const DestinationSlide = ({ getImage }) => {
	const [image, setImage] = useState();

	useEffect(() => {
		setImage(getImage());
	}, [getImage]);

	return (
		<div className="destination-img">
			<img src={image} alt="planet" />
		</div>
	);
};

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
