//@ts-nocheck
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";

// helpers
import { findAllParent, findMenuItem } from "../../helpers/menu";

// constants
import { MenuItemTypes } from "../../constants/menu";

// custom hook
import { useViewport } from "../../hooks/useViewPort";
import { getUserInfor } from "../../utils/getUserInfor";

interface MenuItems {
	item: MenuItemTypes;
	onClickItem: any;
	tag?: string;
	linkClassName?: string;
	className?: string;
	subMenuClassNames?: string;
	activeMenuItems?: string[];
	toggleMenu?: (item: any, status: boolean) => void;
}

const MenuItemWithChildren = ({
	item,
	tag,
	linkClassName,
	className,
	subMenuClassNames,
	activeMenuItems,
	toggleMenu,
	onClickItem,
}: MenuItems) => {
	const history = useHistory();
	const Tag: any = tag;
	const { width } = useViewport();
	const myElementRef = useRef(null);
	const [left, setLeft] = useState();
	const [hoverToggle, setHoverToggle] = useState(false);
	const [open, setOpen] = useState<boolean>(
		activeMenuItems!.includes(item.key),
	);

	useEffect(() => {
		if (myElementRef.current) {
			setLeft(
				parseInt(myElementRef.current.getBoundingClientRect().left),
			);
		}
	}, []);

	useEffect(() => {
		if (myElementRef.current) {
			setLeft(
				parseInt(myElementRef.current.getBoundingClientRect().left),
			);
		}
	}, [hoverToggle]);

	const showMenu = width <= 768 && open;

	useEffect(() => {
		setOpen(activeMenuItems!.includes(item.key));
	}, [activeMenuItems, item]);

	/**
	 * toggles the menu
	 */
	const toggleMenuItem = (e: any) => {
		e.preventDefault();
		const status = !open;
		setOpen(status);
		if (toggleMenu) toggleMenu(item, status);
		history.push(item.url ? item.url : "#");
		return false;
	};

	if (getUserInfor()?.role.actions.includes(item.actions)) {
		return (
			<Tag
				className={classNames(
					"dropdown",
					className,
					activeMenuItems!.includes(item.key) ? "active" : "",
				)}
			>
				<Link
					ref={myElementRef}
					onClick={toggleMenuItem}
					to={`${item.url ? item.url : "#"}`}
					onMouseOver={() => {
						setHoverToggle(true);
					}}
					onMouseOut={() => {
						setHoverToggle(false);
					}}
					data-menu-key={item.key}
					className={classNames(
						"dropdown-toggle",
						"arrow-none",
						linkClassName,
						{
							active: activeMenuItems!.includes(item.key),
						},
					)}
					id={item.key}
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={open}
				>
					{item.icon && (
						<FeatherIcon
							icon={item.icon}
							className="hori-icon me-1"
						/>
					)}
					<span> {item.label} </span>
					<div className="arrow-down"></div>
				</Link>

				{item.children?.length > 0 ? (
					<div
						className={classNames(subMenuClassNames, {
							show: showMenu,
						})}
						style={
							showMenu
								? {}
								: {
										position: "fixed",
										top: "125px",
										left: `${left - 20}px`,
										cursor: "pointer",
									}
						}
						aria-labelledby={item.key}
						onMouseOver={() => {
							setHoverToggle(true);
						}}
						onMouseOut={() => {
							setHoverToggle(false);
						}}
					>
						{(item.children || []).map((child, i) => {
							return (
								<React.Fragment key={i}>
									{child.children?.length > 0 ? (
										<>
											{/* parent */}
											<MenuItemWithChildren
												item={child}
												tag="div"
												linkClassName={classNames(
													"dropdown-item",
													activeMenuItems!.includes(
														child.key,
													)
														? "active"
														: "",
												)}
												activeMenuItems={
													activeMenuItems
												}
												className=""
												subMenuClassNames="dropdown-menu"
												toggleMenu={toggleMenu}
												onClickItem={onClickItem}
											/>
										</>
									) : (
										<>
											{/* child */}
											<MenuItemLink
												item={child}
												className={classNames(
													"dropdown-item",
													{
														active: activeMenuItems!.includes(
															child.key,
														),
													},
												)}
												onClickItem={onClickItem}
											/>
										</>
									)}
								</React.Fragment>
							);
						})}
					</div>
				) : null}
			</Tag>
		);
	} else {
		return "";
	}
};

const MenuItem = ({
	item,
	className,
	linkClassName,
	onClickItem,
}: MenuItems) => {
	if (getUserInfor()?.role.actions.includes(item.actions)) {
		return (
			<li className={classNames("nav-item", className)}>
				<MenuItemLink
					item={item}
					className={linkClassName}
					onClickItem={onClickItem}
				/>
			</li>
		);
	} else {
		return "";
	}
};

const MenuItemLink = ({ item, className, onClickItem }: MenuItems) => {
	return (
		<Link
			to={item.url!}
			target={item.target}
			className={classNames(className)}
			data-menu-key={item.key}
			onClick={() => {
				onClickItem();
			}}
		>
			{item.icon && (
				<FeatherIcon icon={item.icon} className="hori-icon me-1" />
			)}
			<span> {item.label} </span>
		</Link>
	);
};

/**
 * Renders the application menu
 */

interface AppMenuProps {
	menuItems: MenuItemTypes[];
	handleChooseItem: any;
}

const AppMenu = ({ menuItems, handleChooseItem }: AppMenuProps) => {
	let location = useLocation();
	const menuRef = useRef(null);

	const [topnavMenuItems] = useState<MenuItemTypes[]>(menuItems);
	const [activeMenuItems, setActiveMenuItems] = useState<string[]>([]);

	/*
	 * toggle the menus
	 */
	const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
		if (show)
			setActiveMenuItems([
				menuItem["key"],
				...findAllParent(topnavMenuItems, menuItem),
			]);
	};

	/**
	 * activate the menuitems
	 */
	const activeMenu = useCallback(() => {
		const div = document.getElementById("main-side-menu");
		let matchingMenuItem = null;

		if (div) {
			let items: any = div.getElementsByTagName("a");
			for (let i: number = 0; i < items.length; ++i) {
				if (location.pathname === items[i].pathname) {
					matchingMenuItem = items[i];
					break;
				}
			}

			if (matchingMenuItem) {
				const mid = matchingMenuItem.getAttribute("data-menu-key");
				const activeMt = findMenuItem(topnavMenuItems, mid);
				if (activeMt) {
					setActiveMenuItems([
						activeMt["key"],
						...findAllParent(topnavMenuItems, activeMt),
					]);
				}
			}
		}
	}, [location.pathname, topnavMenuItems]);

	useEffect(() => {
		if (topnavMenuItems && topnavMenuItems.length > 0) activeMenu();
	}, [activeMenu, topnavMenuItems]);

	return (
		<>
			<ul className="navbar-nav" ref={menuRef} id="main-side-menu">
				{(topnavMenuItems || []).map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							{item.children ? (
								<MenuItemWithChildren
									item={item}
									tag="li"
									className="nav-item"
									subMenuClassNames="dropdown-menu"
									activeMenuItems={activeMenuItems}
									linkClassName="nav-link"
									toggleMenu={toggleMenu}
									onClickItem={handleChooseItem}
								/>
							) : (
								<MenuItem
									item={item}
									linkClassName={classNames(
										"nav-link",
										"dropdown-toggle",
										{
											active: activeMenuItems.includes(
												item.key,
											),
										},
									)}
									onClickItem={handleChooseItem}
								/>
							)}
						</React.Fragment>
					);
				})}
			</ul>
		</>
	);
};

export default AppMenu;
