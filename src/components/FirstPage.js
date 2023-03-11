import React from "react";
import { Link } from "react-router-dom";
import BookShelfes from "./BookShelfes";



const Main =({bookItem,selectUsedShelf}) =>{

  // Function to know if the button clicked or not to route between pages.

  const handleLinkClick = event => {
    console.log('Link clicked');}

    return(
      <div className="list-books">
      <div className="list-books-title">
          <h1> MyReads </h1>
          </div>
        <div className="list-books-content">
          <BookShelfes bookItem={bookItem} selectUsedShelf={selectUsedShelf}/>
        </div>
        <div className="open-search">
          <Link onClick={handleLinkClick} to="/query">Add a book</Link>
      
      </div>
      </div>
    );
};
export default Main;