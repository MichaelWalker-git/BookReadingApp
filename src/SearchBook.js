import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';
import {Link} from 'react-router-dom';

class SearchBook extends Component {
	static propTypes = {
		moveBook: PropTypes.func.isRequired,
		errorSearch: PropTypes.func.isRequired,
		getBookShelfStatus: PropTypes.func.isRequired
	};

	state = {
		searchQuery: '',
		searchedBooks: [],
		shelfFilter: 'none'
	};


	/**
	 * Calls backend with search query. Updates state with search result books. Error will throw an error notification.
	 * @param {string} e
	 */
	searchBackend = (e) => {
		BooksAPI.search(e, 10).then((response) => {
			if(response !== undefined){
				const formattedBooks = response.map((book) => {
					book['shelf'] = this.props.getBookShelfStatus(book.id);
					return book;
				});
				this.setState({searchedBooks: formattedBooks});
			}
		}).then(error => {
			this.props.errorSearch();
		})
	};

	render(){
		const { searchedBooks } = this.state;
		const currentlyReadingBooks = searchedBooks.filter((book) => book.shelf === 'currentlyReading');
		const readBooks = searchedBooks.filter((book) => book.shelf === 'read');
		const wantToReadBooks = searchedBooks.filter((book) => book.shelf === 'wantToRead');
		let none = searchedBooks.filter((book) => book.shelf === 'none');

		return (
			<div>
				<Link className='close-create-book' to='/'>Cancel</Link>
				<h1>Search Books</h1>
				<div className='create-book-details'>
					<input type='text' className="search-book-details" name='bookSearchTerm' onChange={(event) => this.searchBackend(event.target.value)} placeholder='Search Term'/>
				</div>
				<div>
					<div className='search-books-results'>
						{currentlyReadingBooks.length ? (<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{ currentlyReadingBooks.map((book) => (
										<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
									))}
								</ol>
							</div>
						</div>) : ''}
						{readBooks.length ? (<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{ readBooks.map((book) => (
										<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
									))}
								</ol>
							</div>
						</div>) : ''}
						{wantToReadBooks.length ? (<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{ wantToReadBooks.map((book) => (
										<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
									))}
								</ol>
							</div>
						</div>) : ''}
						{none.length ? (<div className="bookshelf">
							<h2 className="bookshelf-title">No Shelf</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{ none.map((book) => (
										<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
									))}
								</ol>
							</div>
						</div>) : ''}
					</div>
				</div>
			</div>
		)
	}
}

export default SearchBook;
