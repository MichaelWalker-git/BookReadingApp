import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./Book";

class ListBooks extends Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: false
	};

	/**
	 * Moves book to state.
	 */
	moveBook = () => {

	};

	/**
	 * Search function
	 */
	search = () => {

	};

	render() {
		const {books} = this.props;
		const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading');
		const readBooks = books.filter((book) => book.shelf === 'read');
		const wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead');

		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<div className="search-books">
						<div className="search-books-bar">
							<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
							<div className="search-books-input-wrapper">
								<input type="text" placeholder="Search by title or author"/>
							</div>
						</div>
						<div className="search-books-results">
							<ol className="books-grid">
								{/*<Book books={books}/>*/}
							</ol>
						</div>
					</div>
				) : (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<div className="bookshelf">
									<h2 className="bookshelf-title">Currently Reading</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{/*{currentlyReadingBooks.forEach((book) => (<Book book={book}/>))}*/}
											<li>Book1</li>

										</ol>
									</div>
								</div>
								<div className="bookshelf">
									<h2 className="bookshelf-title">Want to Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
										</ol>
									</div>
								</div>
								<div className="bookshelf">
									<h2 className="bookshelf-title">Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
										</ol>
									</div>
								</div>
							</div>
						</div>
						<div className="open-search">
							<a onClick={() => console.log("add")}>Add a book</a>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default ListBooks;

