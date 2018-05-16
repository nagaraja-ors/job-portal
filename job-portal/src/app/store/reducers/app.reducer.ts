import { ActionReducer, Action } from '@ngrx/store';
import { jobDetails, appliedJobDetails, AppStore } from '../models/app.model';

export class appAction implements Action {
    type: string;
    payload: any;
}

export const LOAD_JOBS_LIST = 'LOAD_JOBS_LIST';

export const LOAD_APPLIEDJOBS_LIST = 'LOAD_APPLIEDJOBS_LIST';

/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function appReducer(state: {jobsList: jobDetails[], appliedJobRecord:appliedJobDetails[]}, action: appAction): AppStore {
    switch (action.type) {
        case LOAD_JOBS_LIST:
            return Object.assign({}, state, action.payload);
        case LOAD_APPLIEDJOBS_LIST:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
