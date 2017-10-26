import React from 'react'
import {Route, } from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';
import './App.css'

import AddBook from './AddBook';
import ListBooks from './ListBooks';


class App extends React.Component {
	state = {
		books: [],
		query: ''
	};

	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			this.setState({books});
			console.log(books)
		})
	}

	/**
	 * Add a book to the database.
	 * @param book
	 */
	addBook = (book) => {
		console.log("Addbook", book)
	};

	/**
	 * Add a book to the database.
	 * @param book
	 * @param {string} shelf
	 */
	moveBookToDiffShelf = (book, shelf) => {
		console.log("book", book)
	};


	filterBooks = (query) => {

	};

	render() {
		return (
			<div className="app">
				<Route
					exact path='/' render={() => (<ListBooks
						deleteBook={this.deleteBook}
						books={this.state.books}
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
			</div>
		)
	}
}

export default App;