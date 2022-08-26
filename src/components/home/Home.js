import { Container, Row, Col } from 'react-bootstrap';

import './home.scss';

function Home() {
	return (
		<section className="home">
			<Container>
				<Row className="home-wrapper">
					<Col className="home-left">
						<div className="home-subtitle heading-5">SO, YOU WANT TO TRAVEL TO</div>
						<h1 className="home-title heading-1">SPACE</h1>
						<div className="home-subtitle-sub body-text">
							Let’s face it; if you want to go to space, you might as well genuinely go to outer
							space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
							give you a truly out of this world experience!
						</div>
					</Col>
					<Col className="home-right">
						<MainBtn />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function MainBtn() {
	return (
		<div className="main-btn-hover">
			<button className="main-btn">EXPLORE</button>;
		</div>
	);
}
export default Home;
