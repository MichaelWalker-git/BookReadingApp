import React from 'react'
import {Route} from 'react-router-dom';

import * as BooksAPI from './utils/BooksAPI';
import './App.css'

import AddBook from './AddBook';
import ListBooks from './ListBooks';


class App extends React.Component {
	state = {
		books: []
	};

	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			console.log(books, "BookAPi");
			this.setState({books});
		})
	}


	addBook = () => {
		console.log("Addbook")
	};

	deleteBook = () => {
		console.log("deleteBook")
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
					path='/add' render={()=> (<AddBook addBook={this.addBook}/>)
				}
				/>
			</div>
		)
	}
}

export default App;