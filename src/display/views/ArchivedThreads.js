import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Threads from './Threads';
import { fetchArchivedThreads } from '../../infrastructure/actions';
import { getArchivedFilteredThreads } from '../../infrastructure/selectors';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	filteredThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadFilter: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const { archivedThreads } = state;
	const filteredThreads = getArchivedFilteredThreads(state);
	return {
		archivedThreads,
		filteredThreads
	};
}

class ArchivedThreads extends Component {
	componentDidMount() {
		this.initView(this.props);
	}
	componentWillReceiveProps(nextProps) {
		this.initView(nextProps);
	}

	initView(props) {
		const { dispatch } = props;
		if (!props.archivedThreads || !props.archivedThreads.length) {
			dispatch(fetchArchivedThreads());
		}
	}

	render() {
		const {
			filteredThreads
		} = this.props;
		return (
			<Threads {...this.props} filteredThreads={filteredThreads} />
		);
	}
}

ArchivedThreads.propTypes = propTypes;
export default connect(mapStateToProps)(ArchivedThreads);
