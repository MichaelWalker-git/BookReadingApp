import React, {Component} from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search';
import Checkbox from './Checkbox';

import Book from "./Book";

class ListBooks extends Component {
	static propTypes = {
		moveBook: PropTypes.func.isRequired,
		currentlyReadingBooks: PropTypes.array.isRequired,
		readBooks: PropTypes.array.isRequired,
		wantToReadBooks: PropTypes.array.isRequired,
		query:PropTypes.string,
		updateQuery: PropTypes.func.isRequired,
	};

	state = {
		selectedBookChange: '',
		wantToRead: true,
		currentlyReading: true,
		read: true,
	};

	/**
	 * Creates checkboxes with the given label.
	 * @param {string} label
	 */
	createCheckboxes = (label) => (
		<Checkbox
			label={label}
			handleCheckboxChange={this.handleCheckboxChange}
			key={label}/>
	);

	/**
	 * Filters the search results by showing what bookshelves can be shown.
	 * @param {string} label
	 */
	handleCheckboxChange = (label) => {
		if(label === "Want to Read"){
			const currentState = this.state.wantToRead;
			this.setState({wantToRead: !currentState});
		} else if(label === "Currently Reading"){
			const currentState = this.state.currentlyReading;
			this.setState({currentlyReading: !currentState})
		} else if(label === "Read") {
			const currentState = this.state.read;
			this.setState({read: !currentState})
		}
	};

	render() {
		const {currentlyReadingBooks,readBooks,
			wantToReadBooks, query, updateQuery } = this.props;
		return (
			<div className="app">
				<Search
					createCheckboxes={this.createCheckboxes}
					query={query}
					updateQuery={updateQuery}
				/>
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content" >
							<div>
								{this.state.currentlyReading ? <div className="bookshelf">
									<h2 className="bookshelf-title">Currently Reading</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{currentlyReadingBooks.map((book) => (
												<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
											))}
										</ol>
									</div>
								</div> : ''}
								{this.state.wantToRead ? (<div className="bookshelf">
									<h2 className="bookshelf-title">Want to Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{ wantToReadBooks.map((book) => (
												<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
											))}
										</ol>
									</div>
								</div>) : ''}
								{this.state.read ? (<div className="bookshelf">
									<h2 className="bookshelf-title">Read</h2>
									<div className="bookshelf-books">
										<ol className="books-grid">
											{readBooks.map((book) => (
													<Book key={book.id} book={book} moveBook={this.props.moveBook}/>
												)
											)}
										</ol>
									</div>
								</div>) : ''}
							</div>
						</div>
						<div className="open-search">
							<Link to='/add' className='open-add-link'>Add</Link>
							<br></br>
							<Link to='/Search' className='open-search-link'>Search</Link>
						</div>

					</div>
				}
			</div>
		)
	}
}

export default ListBooks;

