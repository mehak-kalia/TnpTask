import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/post" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/postcreate" activeStyle>
            Post Create
          </NavLink>
        </NavMenu>
      </Nav>
    
  );
};
  
export default Navbar;