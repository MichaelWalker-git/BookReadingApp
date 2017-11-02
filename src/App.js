import React from 'react';
import {Route, Switch } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import escapeRegExp from 'escape-string-regexp';
import update from 'react-addons-update';

import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import AddBook from './AddBook';
import ListBooks from './ListBooks';
import SearchBook from "./SearchBook";
import NoMatch from './NoMatch';

class App extends React.Component {
	state = {
		books: [],
		query: '',
		notificationSystem: null,
	};

	componentDidMount(){
		this.setState({notificationSystem: this.refs.notificationSystem});
		this.getCurrentBooks();
	}

	/**
	 * Add a book to the database.
	 * @param book
	 */
	addBook = (book) => {
		// BooksAPI.addBook(book);
		this.state.notificationSystem.addNotification({
			message: 'Add API not documented; no connection',
			level: 'error'
		});
	};

	/**
	 * If no query is found in the search table, an error notifying the user of a NA query will be posted.
	 */
	errorSearch = () => {
		this.state.notificationSystem.addNotification({
			message: 'No Results Found With That Query',
			level: 'error'
		});
	};

	/**
	 * Get current set of books from DB.
	 */
	getCurrentBooks = () => {
		BooksAPI.getAll().then((books) => {
			if(books){
				this.setState({books});
			}
		})
	};

	/**
	 * Gets particular book's shelf status
	 * @param {number} id
	 * @return {string}
	 */
	getBooksCurrentShelf = (id) => {
		const foundBook = this.state.books.filter((book) => {
			if (book.id === id) {
				return book;
			}
		});
		if(foundBook.length > 0){
			return foundBook[0].shelf;
		} else {
			return 'none';
		}
	};

	/**
	 * Add a book to the database.
	 * @param {string} newShelfStatus
	 * @param {object} book
	 */
	moveBookToDiffShelf = (newShelfStatus, book) => {
		BooksAPI.update(book, newShelfStatus).then((response) => {
			const index = this.state.books.indexOf(book);
			let updatedArray;
			if (newShelfStatus === 'none') {
				this.state.notificationSystem.addNotification({
					message: 'Book removed',
					level: 'error'
				});
			} else {
					this.state.notificationSystem.addNotification({
						message: 'Successfully Changed Bookshelf',
						level: 'success'
					});
			}

			if(index !== -1){
				updatedArray = update(this.state.books, {[index]: {shelf: {$set: newShelfStatus}}});
			} else {
				book.shelf = newShelfStatus;
				updatedArray = update(this.state.books, {$push: [book]});
			}
			this.setState({
				books: updatedArray,
			});
			return response;
		});
	};


	/**
	 * Manipulates the state when the search query changes.
	 * @param query
	 */
	updateQuery = (query) =>{
		this.setState({
			query
		})
	};


	render() {
		let currentlyReadingBooks;
		let readBooks;
		let wantToReadBooks;
		let showingBooks;
		const { query, books } = this.state;

		//If there is a query, displayed books are filtered by the search bar.
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingBooks = books.filter((contact) => match.test(contact.title));
		//	no query, show all books.
		} else {
			showingBooks = books;
		}
		//Filter books according to shelf.
		currentlyReadingBooks =  showingBooks.filter((book) => book.shelf === 'currentlyReading');
		readBooks = showingBooks.filter((book) => book.shelf === 'read');
		wantToReadBooks = showingBooks.filter((book) => book.shelf === 'wantToRead');

		return (
			<div className="app">
				<NotificationSystem ref="notificationSystem" />
				<Switch>
				<Route
					exact path='/' render={( {history}) => (
					<ListBooks
						currentlyReadingBooks={currentlyReadingBooks}
						readBooks={readBooks}
						wantToReadBooks={wantToReadBooks}
						moveBook={this.moveBookToDiffShelf}
						updateQuery={this.updateQuery}
						handleCheckboxChange={this.handleCheckboxChange}
						query={query}
					/>)
				}
				/>
				<Route
					path='/add' render={( {history} ) => (
					<AddBook addBook={(book) => {
						this.addBook(book);
						history.push('/');
					}}/>
				)}
				/>
				<Route
					path='/search' render={( {history} ) => (
					<SearchBook moveBook={(status, book) => {
						this.moveBookToDiffShelf(status, book);
						history.push('/');
					}}
											errorSearch={this.errorSearch}
											books={this.state.books}
											getBookShelfStatus={this.getBooksCurrentShelf}
					/>
				)}
				/>
					<Route component={NoMatch}/>
				</Switch>
			</div>
		)
	}
}

export default App;