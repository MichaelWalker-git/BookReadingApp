import { combineReducers } from 'redux';
import searchConcertReducer from './search_concerts_reducer';

const rootReducer = combineReducers({
  concertResults: searchConcertReducer
});

export default rootReducer;
