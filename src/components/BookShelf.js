import React from "react";
import Boook from './Boook';


const BookShelf = ({bookItem,title,selectUsedShelf}) =>{

    return(
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { bookItem.map( b => (
                            <li key={b.id}>
                                <Boook book={b} selectUsedShelf={selectUsedShelf}/>
                            </li>
                            )) }
                        </ol>
                        </div>
                        </div> )}


  export default BookShelf;

