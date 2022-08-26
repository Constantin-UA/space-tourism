import logo from '../../assets/navigateMenu/logo.png';
import './navigateMenu.scss';

function NavigateMenu() {
	const data = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];

	return (
		<div className="nav">
			<img src={logo} className="nav-logo" alt="logo" />
			<ul className="nav-wrapper">
				{data.map((el, idx) => {
					return (
						<li
							onClick={(e) => {
								console.log('Click on:', e.target);
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

export default NavigateMenu;

/* return (
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
); */
