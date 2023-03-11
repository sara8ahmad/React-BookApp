import React from "react";

const Boook = ({book,selectUsedShelf}) => {


  // Function to change the book shelf to the changed book shelf for book when changing its position.

    const changeHandler= (event) =>{
        event.preventDefault();
        selectUsedShelf(book,event.target.value);
        
    };



    return( 
    <div className="book">
    <div className="book-top">
      <div className="book-cover"
        style={{
          width: 128,
          height: 188,
          backgroundImage: book.imageLinks ?`url(${book.imageLinks.thumbnail})` : ""}}></div> 
          
            <div className="book-shelf-changer">
            <select defaultValue={book.shelf ?
              book.shelf :"none"} onChange = {changeHandler}>
        
             <option value="moveTo"disabled>
                  Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
<div className="book-title">{book.title}</div>
<div className="book-authors">{book.authors}</div>    
     </div>)}
     
     export default Boook;

     