import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

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
				<h1>Add a book!</h1>
				<form onSubmit={this.onFormSubmit} className='create-book-form'>
					<div>
						<label htmlFor="title">Title</label>
						<input className="create-book-details" type='text' name="title" placeholder="Title"/>
					</div>
					<div>
						<label htmlFor="author">Author</label>

						<input className="create-book-details" type='text' name='author' placeholder="Author"/>
					</div>
					<div>
						<label htmlFor="thumbnail">Thumbnail URL</label>

						<input className="create-book-details" type='text' name="thumbnail" placeholder="Thumbnail"/>
					</div>
					<div>
						<label htmlFor="shelf">Book Shelf Area</label>
						<select>
							<option className="create-book-details" value="currentlyReading">Currently Reading</option>
							<option className="create-book-details" value="wantToRead">Want to Read</option>
							<option className="create-book-details" value="read">Read</option>
						</select>
					</div>
					<div>
					<button className='create-book-details'>Create a Book!</button>
					<button className='close-search'>
						<Link to='/'>Cancel</Link>
					</button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddBook;