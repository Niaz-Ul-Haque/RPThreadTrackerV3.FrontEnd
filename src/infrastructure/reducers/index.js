import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import activeThreads from './activeThreads';
import activeThreadsStatus from './activeThreadsStatus';
import archivedThreads from './archivedThreads';
import archivedThreadsStatus from './archivedThreadsStatus';
import bulkThreadsToEdit from './bulkThreadsToEdit';
import characterToEdit from './characterToEdit';
import characters from './characters';
import errors from './errors';
import loading from './loading';
import news from './news';
import publicThreadFilter from './publicThreadFilter';
import publicThreads from './publicThreads';
import publicThreadsStatus from './publicThreadsStatus';
import publicViews from './publicViews';
import randomThread from './randomThread';
import tags from './tags';
import tagToEdit from './tagToEdit';
import threadFilter from './threadFilter';
import threadToEdit from './threadToEdit';
import ui from './ui';
import user from './user';
import userSettings from './userSettings';
import viewToEdit from './viewToEdit';

export default combineReducers({
	activeThreads,
	activeThreadsStatus,
	archivedThreads,
	archivedThreadsStatus,
	bulkThreadsToEdit,
	characterToEdit,
	characters,
	errors,
	loading,
	news,
	publicThreadFilter,
	publicThreads,
	publicThreadsStatus,
	publicViews,
	randomThread,
	tags,
	tagToEdit,
	threadFilter,
	threadToEdit,
	toastr,
	ui,
	user,
	userSettings,
	viewToEdit
});
