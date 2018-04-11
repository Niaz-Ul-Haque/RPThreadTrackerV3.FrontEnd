import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMIT_USER_ACCOUNT_INFO,
	userAccountInfoFailure,
	userAccountInfoSuccess
} from '../../actions';

function* submitUserAccountInfo(action) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/user/accountinfo`, action.data);
		yield put(userAccountInfoSuccess());
	} catch (e) {
		yield put(userAccountInfoFailure(e.response.data));
	}
}

export default function* submitUserAccountInfoSaga() {
	yield takeEvery(SUBMIT_USER_ACCOUNT_INFO, submitUserAccountInfo);
}
