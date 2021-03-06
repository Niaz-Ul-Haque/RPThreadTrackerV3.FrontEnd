import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';
import Style from './_styles';

class Sidebar extends Component {
	render() {
		function wrapper(item) {
			return React.createElement(item.wrapper.element, item.wrapper.attributes, item.name);
		}
		const title = (titleData, key) => {
			const classes = classNames('nav-title', titleData.class);
			return (
				<li key={key} className={classes}>
					{wrapper(titleData)}{' '}
				</li>
			);
		};
		const navItem = (item, key) => {
			const classes = classNames('nav-link', item.class);
			return (
				<NavItem key={key}>
					<NavLink to={item.url} className={classes} activeClassName="active">
						<i className={item.icon} />
						{item.name}
					</NavLink>
				</NavItem>
			);
		};
		const navLink = (item, idx) => {
			if (item.title) {
				return title(item, idx);
			}
			return navItem(item, idx);
		};

		// nav list
		// eslint-disable-next-line no-use-before-define
		const navList = (items) => items.map((item, index) => navLink(item, index));

		// sidebar-nav root
		return (
			<Style className="sidebar">
				<nav className="sidebar-nav">
					<Nav>{navList(nav.items)}</Nav>
				</nav>
			</Style>
		);
	}
}

export default Sidebar;
