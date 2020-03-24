import React from 'react';
import { faList, faCalendarDay, faCalendarWeek, faCalendarCheck  } from '@fortawesome/free-solid-svg-icons';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavbarComponent(){
  return(
    <Navbar className="menu-desplegable" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
          <Nav.Link as={Link} to ="/">
          <FontAwesomeIcon icon={faList} /><span> Todas</span>
          </Nav.Link>
          <Nav.Link as={Link} to ="/hoy">
          <FontAwesomeIcon icon={faCalendarDay} /><span> Hoy</span>
          </Nav.Link>
          <Nav.Link as={Link} to ="/proxima-semana">
          <FontAwesomeIcon icon={faCalendarWeek} />
          <span> Proxima semana</span>
          </Nav.Link>
          <Nav.Link as={Link} to ="/completadas" >
          <FontAwesomeIcon icon={faCalendarCheck} />
          <span> Completadas</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
