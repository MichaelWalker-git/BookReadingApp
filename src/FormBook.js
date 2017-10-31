import React from 'react';
import {Link} from 'react-router-dom';

const FormBook = (props) => {
	return (
		<div>
			<Link className='close-create-book' to='/'>Cancel</Link>
			<div className='create-book-title'>
				<h1>{props.title}</h1>
			</div>
			<form onSubmit={props.onFormSubmit} className='create-book-form'>
				<div className='create-book-details'>
					<input type='text' name='bookName' placeholder='Book Title'/>
					<input type='text' name='bookId' placeholder='Book ID'/>
					<input type='text' name='bookThumbnail' placeholder='Book Cover URL'/>
					<select className="create-book-details">
						<option  value="currentlyReading">Currently Reading</option>
						<option  value="wantToRead">Want to Read</option>
						<option  value="read">Read</option>
					</select>
					<button>Add Contact</button>
				</div>
			</form>
		</div>
	)
};

export default FormBook;
