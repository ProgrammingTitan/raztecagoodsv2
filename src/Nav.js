import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './App.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar style={{backgroundColor: 'rgba(255,255,255,0.4)'},{color:'black'},{fontWeight:'bolder'}} fixed="top" light expand="md">
        <NavbarBrand href="/">Razteca Goods</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={ {position: 'fixed'},{top:'0'}} className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Products">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactUs">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown style={{backgroundColor: 'rgba(255,255,255,0)'}} nav inNavbar>
              <DropdownToggle nav caret>
                Sponsors
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: 'rgba(255,255,255,0.4)'}} right>
                <DropdownItem>
                <NavItem>
              <NavLink href="https://techstack-efcc8.firebaseapp.com/">Tech Stack</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink href="https://www.instagram.com/brainyums/">Brain Yums</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink href="https://blooming-dusk-55431.herokuapp.com/">Vicky's Pastries</NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;