import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AtAGlanceCard from './components/at-a-glance/AtAGlanceCard';
import RecentActivityCard from './components/recent-activity/RecentActivityCard';
import YourCharactersCard from './components/your-characters/YourCharactersCard';
import TrackerSupportCard from './components/tracker-support/TrackerSupportCard';
import RandomThreadCard from './components/random-thread/RandomThreadCard';
import { generateRandomThread, updateUserSettings, fetchActiveThreads, fetchCharacters, upsertThread, openUntrackThreadModal } from '../../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getQueuedThreads, getRecentActivity, getThreadCountsByCharacter, getIsLoadingIconVisible } from '../../../infrastructure/selectors';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	userSettings: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	dispatch: PropTypes.func.isRequired,
	myTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	theirTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	queuedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	randomThread: PropTypes.shape({}).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	characterThreadCounts: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		userSettings,
		activeThreads,
		randomThread
	} = state;
	const myTurnThreads = getMyTurnThreads(state);
	const theirTurnThreads = getTheirTurnThreads(state);
	const queuedThreads = getQueuedThreads(state);
	const recentActivityThreads = getRecentActivity(state);
	const characterThreadCounts = getThreadCountsByCharacter(state);
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
	return {
		characters,
		userSettings,
		activeThreads,
		randomThread,
		myTurnThreads,
		theirTurnThreads,
		queuedThreads,
		recentActivityThreads,
		characterThreadCounts,
		isLoadingIconVisible
	};
}

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.showDashboardThreadDistributionToggle =
			this.showDashboardThreadDistributionToggle.bind(this);
		this.generateRandomThread = this.generateRandomThread.bind(this);
		this.archiveThread = this.archiveThread.bind(this);
		this.openUntrackThreadModal = this.openUntrackThreadModal.bind(this);
		this.markThreadQueued = this.markThreadQueued.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			dispatch(fetchActiveThreads());
		}
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}

	showDashboardThreadDistributionToggle() {
		const { dispatch, userSettings } = this.props;
		dispatch(updateUserSettings({
			...userSettings,
			showDashboardThreadDistribution: !userSettings.showDashboardThreadDistribution
		}));
	}

	generateRandomThread() {
		const { dispatch } = this.props;
		dispatch(generateRandomThread());
	}

	archiveThread(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		dispatch(upsertThread(updatedThread));
	}

	markThreadQueued(thread) {
		const { dispatch } = this.props;
		const updatedThread = {
			...thread, dateMarkedQueued: new Date(Date.now())
		};
		dispatch(upsertThread(updatedThread));
	}

	openUntrackThreadModal(thread) {
		const { dispatch } = this.props;
		dispatch(openUntrackThreadModal(thread));
	}

	render() {
		const {
			characters,
			userSettings,
			activeThreads,
			myTurnThreads,
			theirTurnThreads,
			queuedThreads,
			recentActivityThreads,
			randomThread,
			isLoadingIconVisible,
			characterThreadCounts
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<AtAGlanceCard
							showDashboardThreadDistribution={userSettings.showDashboardThreadDistribution}
							showDashboardThreadDistributionToggle={this.showDashboardThreadDistributionToggle}
							myTurnThreads={myTurnThreads}
							theirTurnThreads={theirTurnThreads}
							activeThreads={activeThreads}
							queuedThreads={queuedThreads}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" md="6">
						<RecentActivityCard
							recentActivityThreads={recentActivityThreads}
							allThreads={activeThreads}
							characters={characters}
							archiveThread={this.archiveThread}
							openUntrackThreadModal={this.openUntrackThreadModal}
							markThreadQueued={this.markThreadQueued}
							loadingInProgress={isLoadingIconVisible}
						/>
					</Col>
					<Col xs="12" md="6">
						<YourCharactersCard
							characters={characters}
							characterThreadCounts={characterThreadCounts}
							loadingInProgress={isLoadingIconVisible}
						/>
					</Col>
				</Row>
				<Row>
					<Col md="6" xs="12">
						<RandomThreadCard
							generateRandomThread={this.generateRandomThread}
							randomThread={randomThread}
						/>
					</Col>
					<Col md="6" xs="12">
						<TrackerSupportCard />
					</Col>
				</Row>
			</div >
		);
	}
}

Dashboard.propTypes = propTypes;
export default connect(mapStateToProps)(Dashboard);
