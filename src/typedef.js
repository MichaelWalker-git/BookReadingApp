declare module "bookshelf-typedef" {
import * as React from 'react';


	interface BookProps {
			title: string,
			subtitle: string,
			authors: <!Array<string>>,
			publisher: string,
			publishedDate: Date,
			description: string,
			industryIdentifiers: <!Array<workflow.Bookshelf,
			readingModes: {
			text: boolean,
				image: boolean
		},
			pageCount: number,
			printType: string,
			categories: <!Array<string>>,
			maturityRating: string,
			allowAnonLogging: boolean,
			contentVersion: string,
			panelizationSummary: {
			containsEpubBubbles: boolean,
				containsImageBubbles: boolean,
		},
			imageLinks: {
			smallThumbnail: http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api,
				thumbnail: http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
		},
			language: en,
			previewLink: http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api,
			infoLink: https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api,
			canonicalVolumeLink: https://market.android.com/details?id=book-1wy49i-gQjIC,
			id: string
			shelf: string
		
	}
				industryId: 			{
					type: string,
					identifier: string,


					module BookshelfTypedef {
		 export const Book: React.Factory<BookProps>;
	}


export = BookshelfTypedef;
}