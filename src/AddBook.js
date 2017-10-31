import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';
import FormBook from "./FormBook";

class AddBook extends Component {
	static propTypes = {
		addBook: PropTypes.func.isRequired,
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		const values = serializeForm(e.target, { hash: true });
		if (this.props.addBook) {
			this.props.addBook(values);
		}
	};

	render(){
		return (
			<div>
				<FormBook title={'Add a book!'} onFormSubmit={this.onFormSubmit}/>
			</div>
		)
	}
}

export default AddBook;