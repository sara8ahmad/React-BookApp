import React from "react";
import BookShelf from "./BookShelf";


const Shelfes = ({bookItem,selectUsedShelf }) => {


    // Making an array and saving each shelf in it.


   const bookTitle = [];
  

    bookTitle[0] = bookItem.filter((book) => book.shelf ==="currentlyReading");
    bookTitle[1] = bookItem.filter((book) => book.shelf === "wantToRead");
    bookTitle[2] = bookItem.filter((book) => book.shelf === "read");

  

return(
  <div>
    
        <BookShelf title="Currently Reading" bookItem={bookTitle[0]} selectUsedShelf={selectUsedShelf} />
        <BookShelf title="Want To Read" bookItem={bookTitle[1]} selectUsedShelf={selectUsedShelf}  />
        <BookShelf title="Read" bookItem={bookTitle[2]} selectUsedShelf={selectUsedShelf}  />
        
  </div>
)
}
export default Shelfes;