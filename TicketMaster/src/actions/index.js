import { SEARCH_CONCERTS } from './types';
import axios from 'axios';
import { API_KEY } from '../secretKeys';

export function searchConcerts(term){
	const request = axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${term}&countryCode=US&r&apikey=${API_KEY}`);
	return {
		type: SEARCH_CONCERTS,
		payload: request
	}
}