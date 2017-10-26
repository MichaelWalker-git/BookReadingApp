import React from 'react';
import BookOptions from './BookOptions'


const Book = (props) => {
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.url})` }}></div>
					<div className="book-shelf-changer">
						<BookOptions/>
					</div>
				</div>
				<div className="book-title">{props.title}</div>
				<div className="book-authors">{props.authors.forEach((auth => (<div>{auth}</div>)))}</div>
			</div>
		</li>
	);
};

export default Book;