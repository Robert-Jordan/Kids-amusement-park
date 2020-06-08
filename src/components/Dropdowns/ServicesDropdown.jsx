import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    DropdownToggle, DropdownMenu, DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

const AuthenticatedNavbar = () => {
    return (
        <UncontrolledDropdown nav>
            <DropdownToggle
                caret
                color="default"
                href="#"
                nav
                onClick={e => e.preventDefault()}
            >
                <p>Services</p>
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem
                    to="/category-page"
                    tag={Link}>
                    Our services
                    {/* Add underline, bold style */}
                </DropdownItem>
                <DropdownItem
                    to="/category-page"
                    tag={Link}>
                    Themed rooms
                  </DropdownItem>
                <DropdownItem
                    href="#"
                    onClick={e => e.preventDefault()}
                >
                    Rooms of fear
                  </DropdownItem>
                <DropdownItem
                    href="#"
                    onClick={e => e.preventDefault()}
                >
                    Laughter room
                  </DropdownItem>
                <DropdownItem
                    href="#"
                    onClick={e => e.preventDefault()}
                >
                    Lasertag
                  </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default AuthenticatedNavbar;