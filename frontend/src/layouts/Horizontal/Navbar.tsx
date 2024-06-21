import React from "react";
import { Collapse } from "react-bootstrap";
import classNames from "classnames";

// helpers
import { getHorizontalMenuItems } from "../../helpers/menu";

// components
import AppMenu from "./Menu";

interface NavbarProps {
	isMenuOpened?: boolean;
	handleChooseItem: any;
}

const Navbar = ({ isMenuOpened, handleChooseItem }: NavbarProps) => {
	// change the inputTheme value to light for creative theme
	const inputTheme = "light";

	return (
		<div className="topnav">
			<div className="container-fluid">
				<nav
					className={classNames(
						"navbar",
						"navbar-expand-lg",
						"topnav-menu",
						"navbar-" + inputTheme,
					)}
				>
					<Collapse in={isMenuOpened} className="navbar-collapse">
						<div id="topnav-menu-content">
							<AppMenu
								menuItems={getHorizontalMenuItems()}
								handleChooseItem={handleChooseItem}
							/>
						</div>
					</Collapse>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
