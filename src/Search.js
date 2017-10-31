import React from 'react';

const Search = (props) => {
	const { updateQuery, query, handleFormSubmit, createCheckboxes } = props;


	return (
		<div className="search-books">
			<div className="search-books-bar">
				<div className="search-books-input-wrapper">
					<input
						className='search-books-bar'
						type='text'
						placeholder='Search books by author or title'
						value={query}
						onChange={(event) => updateQuery(event.target.value)}
					/>
				</div>
			</div>
			<div>
				<form onSubmit={handleFormSubmit} className="search-books-checkboxes">
					{createCheckboxes('Currently Reading')}
					{createCheckboxes('Want to Read')}
					{createCheckboxes('Read')}
				</form>
			</div>
		</div>
	)
};


export default Search;