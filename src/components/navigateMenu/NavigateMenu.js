import logo from '../../assets/navigateMenu/logo.png';

import OffcanvasRight from '../offcanvasRight/OffcanvasRight';
import { NavLink } from 'react-router-dom';
import './navigateMenu.scss';

function NavigateMenu(props) {
	const data = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
	const dataHref = ['/', '/destination', '/crew', '/technology'];

	return (
		<div className="navMain">
			<img src={logo} className="navMain-logo" alt="logo" />
			<OffcanvasRight dataHref={dataHref} />

			<ul className="navMain-wrapper">
				{data.map((el, idx) => {
					return (
						<li className="navMain-item" key={idx}>
							<NavLink
								style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
								to={dataHref[idx]}
								className="nav-text"
							>
								<span>0{idx}</span>
								{el}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default NavigateMenu;
