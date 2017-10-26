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
		showSearchPage: false,
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
		const currentlyReadingBooks = this.props.books.filter((book) => book.shelf === 'currentlyReading');
		const readBooks = this.props.books.filter((book) => book.shelf === 'read');
		const wantToReadBooks = this.props.books.filter((book) => book.shelf === 'wantToRead');

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
											{currentlyReadingBooks.map((book) => (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
															<div className="book-shelf-changer">
																<select>
																	<option value="none" disabled>Move to...</option>
																	<option value="currentlyReading">Currently Reading</option>
																	<option value="wantToRead">Want to Read</option>
																	<option value="read">Read</option>
																	<option value="none">None</option>
																</select>
															</div>
														</div>
														<div className="book-title">{book.title}</div>
														<div className="book-authors">{book.authors.map((auth => (<div key={auth}>{auth}</div>)))}</div>
													</div>
												</li>
											))}
										</ol>
									</div>
								</div>
								<div className="bookshelf">
									<h2 className="bookshelf-title">Want to Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{readBooks.map((book) => (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
															<div className="book-shelf-changer">
																<select>
																	<option value="none" disabled>Move to...</option>
																	<option value="currentlyReading">Currently Reading</option>
																	<option value="wantToRead">Want to Read</option>
																	<option value="read">Read</option>
																	<option value="none">None</option>
																</select>
															</div>
														</div>
														<div className="book-title">{book.title}</div>
														<div className="book-authors">{book.authors.map((auth => (<div key={auth}>{auth}</div>)))}</div>
													</div>
												</li>
											))}
										</ol>
									</div>
								</div>
								<div className="bookshelf">
									<h2 className="bookshelf-title">Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{ wantToReadBooks.map((book) => (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
															<div className="book-shelf-changer">
																<select>
																	<option value="none" disabled>Move to...</option>
																	<option value="currentlyReading">Currently Reading</option>
																	<option value="wantToRead">Want to Read</option>
																	<option value="read">Read</option>
																	<option value="none">None</option>
																</select>
															</div>

														</div>
														<div className="book-title">{book.title}</div>
														<div className="book-authors">{book.authors.map((auth => (<div key={auth}>{auth}</div>)))}</div>
													</div>
												</li>
											))}
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

