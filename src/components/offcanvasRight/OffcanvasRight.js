import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

import './offcanvasRight.scss';
function OffcanvasRight(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const data = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];
	const dataHref = ['#HOME', '#DESTINATION', '#CREW', '#TECHNOLOGY'];
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
					<Nav
						className="navRight-wrapper"
						onSelect={(selectedKey) => props.onPageSelected(selectedKey)}
					>
						{data.map((el, idx) => {
							return (
								<Nav.Item className="navRight-item" key={idx}>
									<Nav.Link
										href={dataHref[idx].toLowerCase()}
										eventKey={idx}
										className="navRight-text"
									>
										<span>0{idx}</span>
										{el}
									</Nav.Link>
								</Nav.Item>
							);
						})}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffcanvasRight;
