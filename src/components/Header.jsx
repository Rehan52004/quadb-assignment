import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
	return (
		<>
			<div>
				<Navbar
					key="lg"
					expand="lg"
					className="bg-body-tertiary mb-0 mb-lg-3"
				>
					<Container fluid="lg">
						<Navbar.Brand href="#">QuadB Assignment</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-lg`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-lg`}
							aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-lg`}
								>
									QuadB Assignment
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<NavLink
										to="/"
										className="nav-link"
										style={{
											fontSize: "18px",
											fontWeight: "500",
										}}
									>
										Home
									</NavLink>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
				{props.children}
			</div>
		</>
	);
}

export default Header;
