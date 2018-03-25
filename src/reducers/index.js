import { combineReducers } from 'redux';
import sources from './sources';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    sources,
});

export default rootReducer;
