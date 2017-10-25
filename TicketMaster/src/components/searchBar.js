/**
 * Created by miketran on 3/6/17.
 */
import React, {Component} from 'react';
import _ from 'lodash';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			searchTerm: 'the XX'
		};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(term){
		this.setState({searchTerm: term});
		this.props.onSearchBarChange(term);
	}

	render(){
		return(
			<div className="search-bar">
				<label>
					Search Concerts Here:
					<input type="text" placeholder="The XX" onChange={event => this.onInputChange(event.target.value)} />
				</label>
			</div>
		);
	}

}

export default SearchBar;