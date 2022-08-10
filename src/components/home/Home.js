import { Component } from 'react';
import './home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="nav" style={{ height: '100px' }}>
					<ul className="nav-wrapper">
						<li className="menu-item">00 Home</li>
						<li className="menu-item">01 Destination</li>
						<li className="menu-item">02 Crew</li>
						<li className="menu-item">03 Technology</li>
					</ul>
				</div>
				<div className="home-wrapper">
					<div className="col-1">
						<div className="subheading-1">SO, YOU WANT TO TRAVEL TO</div>
						<div className="heading-1">SPACE</div>
						<div className="subheading-1">
							Let’s face it; if you want to go to space, you might as well genuinely go to outer
							space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
							give you a truly out of this world experience!
						</div>
					</div>
					<div className="col-2">
						<div className="main-btn">EXPLORE</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
