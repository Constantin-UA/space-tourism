import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

import './offcanvasRight.scss';
function OffcanvasRight(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const data = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
	return (
		<>
			<button className="offcanvasRight-hamburger" onClick={handleShow}>
				<span className="offcanvasRight-line"></span>
				<span className="offcanvasRight-line"></span>
				<span className="offcanvasRight-line"></span>
			</button>

			<Offcanvas placement="end" show={show} onHide={handleClose}>
				<Offcanvas.Header
					className="offcanvasRight-header"
					closeButton
					closeVariant="white"
				></Offcanvas.Header>
				<Offcanvas.Body>
					<ul className="navRight-wrapper">
						{data.map((el, idx) => {
							return (
								<li className="navRight-item" key={idx}>
									<NavLink
										style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
										to={props.dataHref[idx]}
										className="navRight-text"
									>
										<span>0{idx}</span>
										{el}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffcanvasRight;
