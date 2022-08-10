import { Component } from 'react';
import logo from '../../assets/navigateMenu/logo.png';
import line from '../../assets/navigateMenu/line.png';
import './navigateMenu.scss';

class NavigateMenu extends Component {
	state = {
		active: 0,
		data: ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'],
	};

	onClick = (eve) => {
		document
			.querySelectorAll('.nav-item')
			.forEach((item) => item.classList.remove('nav-item-active'));
		eve.target.classList.add('nav-item-active');
		const active = document.querySelector('.nav-item-active').getAttribute('data-atr');
		this.setState({ active });
	};
	render() {
		return (
			<div className="nav">
				<img src={logo} className="nav-logo" alt="logo" />
				<img src={line} className="nav-line" alt="logo" />
				<ul className="nav-wrapper">
					{this.state.data.map((el, idx) => {
						return (
							<li
								onClick={(e) => {
									this.onClick(e);
									this.props.onPageSelected(idx);
								}}
								className="nav-item"
								data-atr={idx}
								key={idx}
							>
								<span>0{idx}</span>
								{el}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default NavigateMenu;
