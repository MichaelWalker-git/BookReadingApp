/**
 * Created by miketran on 3/6/17.
 */
import { SEARCH_CONCERTS } from './../actions/types';

export default function (state = [], action){
	switch(action.type){
		case SEARCH_CONCERTS:
			return [...state, ...action.payload.data._embedded.events];
	}
	return state;
}