// #region imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BreadcrumbItem } from 'reactstrap';
import routes from './_routes';
// #endregion imports

const propTypes = {
	match: PropTypes.shape({ match: PropTypes.shape({ url: PropTypes.string }) }).isRequired
};

class BreadcrumbsItem extends React.Component {
	findRouteName(url) {
		return routes[url];
	}
	render() {
		const { match } = this.props;
		const routeName = this.findRouteName(match.url);
		if (routeName) {
			return (
				match.isExact ?
					(<BreadcrumbItem active>{routeName}</BreadcrumbItem>) :
					(
						<BreadcrumbItem>
							<Link href={match.url} to={match.url}>{routeName}</Link>
						</BreadcrumbItem>
					)
			);
		}
		return null;
	}
}
BreadcrumbsItem.propTypes = propTypes;
export default BreadcrumbsItem;
