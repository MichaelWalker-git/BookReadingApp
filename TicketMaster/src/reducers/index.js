import { combineReducers } from 'redux';
import searchConcertReducer from './search_concerts_reducer';

const rootReducer = combineReducers({
  searchConcerts: searchConcertReducer
});

export default rootReducer;
