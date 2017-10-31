import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';
import {Link} from 'react-router-dom';

class SearchBook extends Component {
	static propTypes = {
		moveBook: PropTypes.func.isRequired,
		errorSearch: PropTypes.func.isRequired,
	};

	state = {
		searchQuery: '',
		searchedBooks: [],
		shelfFilter: 'none'
	};

	searchBackend = (e) => {
		BooksAPI.search(e, 10).then((response) => {
			if(response !== undefined){
				this.setState({searchedBooks: response});
			}
		}).then(error => {
			this.props.errorSearch();
			console.log(error)
		})
	};

	render(){
		return (
			<div>
				<Link className='close-create-book' to='/'>Cancel</Link>
				<h1>Search Books</h1>
				<div className='create-book-details'>
					<input type='text' className="search-book-details" name='bookSearchTerm' onChange={(event) => this.searchBackend(event.target.value)} placeholder='Search Term'/>
				</div>
				<div>
					<div className='search-books-results'>
							<ol className="books-grid">
								{this.state.searchedBooks.length > 0 ? this.state.searchedBooks.map((book) => (
										<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
									)
								): ''}
							</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchBook;