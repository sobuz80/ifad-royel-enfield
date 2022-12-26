import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLogo from '../../../asset/images/logo/LOGO.png';
import { AiOutlineSearch } from 'react-icons/ai';
import Number from '../../../asset/images/footer/contact.png';

const Manubar=()=> {
	
		return (
			<Fragment>
				<header id="header">
					<Navbar bg="light" expand="lg" className='py-3'>
					<Container fluid className='px-3 px-lg-5'>
						<Navbar.Brand>
							<Link to='/'>
								<img className='nav_logo' src={NavLogo} alt="img"/>
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link to="#" className='active'>Home</Nav.Link>
							<Nav.Link to="#">Apollo tyres</Nav.Link>
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item to="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item to="#action/3.4">
								Separated link
							</NavDropdown.Item>
							</NavDropdown> */}
							<Nav.Link to="#">Dealer</Nav.Link>
							<Nav.Link to="#">News & Events</Nav.Link>
							<Nav.Link to="#">About US</Nav.Link>
							<Nav.Link to="#">Contact</Nav.Link>
						</Nav>
						<Form className="d-flex flex-column  align-items-lg-end  align-items-center">
								<InputGroup className="mb-1">
									<Form.Control className="ps-3 pe-4 searchBox" placeholder="SEARCH"/>
									<AiOutlineSearch className='searchIcon'/>
								</InputGroup>
								<div className="hotline">
									<Link to="#">
										<img src={Number} alt="" className="ms-2 hotNumber"/>
									</Link>
								</div>
							</Form>
						</Navbar.Collapse>
					</Container>
					</Navbar>
				</header>
			</Fragment>
		);
	}

export default Manubar;
