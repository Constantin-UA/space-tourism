import logo from '../../assets/navigateMenu/logo.png';
import Nav from 'react-bootstrap/Nav';
import OffcanvasRight from '../offcanvasRight/OffcanvasRight';
import './navigateMenu.scss';

function NavigateMenu(props) {
	const data = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
	const dataHref = ['#HOME', '#DESTINATION', '#CREW', '#TECHNOLOGY'];

	return (
		<div className="navMain">
			<img src={logo} className="navMain-logo" alt="logo" />
			<OffcanvasRight onPageSelected={props.onPageSelected} />

			<Nav
				className="navMain-wrapper"
				onSelect={(selectedKey) => props.onPageSelected(selectedKey)}
			>
				{data.map((el, idx) => {
					return (
						<Nav.Item className="navMain-item" key={idx}>
							<Nav.Link href={dataHref[idx].toLowerCase()} eventKey={idx} className="nav-text">
								<span>0{idx}</span>
								{el}
							</Nav.Link>
						</Nav.Item>
					);
				})}
			</Nav>
		</div>
	);
}

export default NavigateMenu;
