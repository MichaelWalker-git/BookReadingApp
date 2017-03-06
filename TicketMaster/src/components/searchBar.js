/**
 * Created by miketran on 3/5/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: 'the xx'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount(){
		this.props.searchConcerts(this.state.searchTerm);
	}

	handleChange(event){
		this.setState({searchTerm: event.target.value});
	}

	handleSubmit(){
		event.preventDefault();
		this.props.searchConcerts(this.state.searchTerm);
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Search Concerts Here:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

function mapStateToProps(state){
	return {
		searchConcerts: state.searchConcerts
	}
}

export default connect(mapStateToProps, actions)(SearchBar);