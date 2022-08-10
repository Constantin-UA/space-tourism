import { Component } from 'react';
import './home.scss';

class Home extends Component {
	onMouseEnter = () => {
		const el = document.querySelector('.main-btn-hover');
		el.classList.add('main-btn-hover-active');
	};
	onMouseLeave = () => {
		const el = document.querySelector('.main-btn-hover');
		el.classList.remove('main-btn-hover-active');
	};
	render() {
		return (
			<div className="home">
				<div className="col-1">
					<div className="home-subtitle">SO, YOU WANT TO TRAVEL TO</div>
					<div className="home-title">SPACE</div>
					<div className="home-subtitle-sub">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space
						and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
						a truly out of this world experience!
					</div>
				</div>
				<div className="col-2">
					<div className="main-btn-hover">
						<div
							onMouseEnter={this.onMouseEnter}
							onMouseLeave={this.onMouseLeave}
							className="main-btn"
						>
							EXPLORE
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
