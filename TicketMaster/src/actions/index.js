import { SEARCH_CONCERTS } from './types';
import axios from 'axios';

export function searchConcerts(term){
	console.log(term);

	return {
		type: SEARCH_CONCERTS,
		payload: term
	}
}