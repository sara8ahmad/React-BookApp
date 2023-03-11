import React from 'react'
import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import FirstPage from './components/FirstPage';
import Query from './components/Query';

function App(){


  const [bookItem, setBookItem] = useState ([]);

  // Taking books from udacity API and saving it in the Main page.

  useEffect (()=> {
      BooksAPI.getAll()
      .then ( data => {
      setBookItem(data);
      })
 });

 // This function used to update the Bookshelf after changing the book position.

 const selectUsedShelf = (book,shelf) =>{

  BooksAPI.update(book,shelf);
  console.log(book,shelf);
  const newBookList = bookItem?.filter( (b)=> book.id === b.id);
  console.log(newBookList)
  setBookItem((old) => [...newBookList]);
  console.log(setBookItem);

 };
 
return (
  
  
  <div className="app">


  <BrowserRouter>
     
  
  <Switch>
  
  <Route path ="/query">

      <Query bookItem ={bookItem} selectUsedShelf={selectUsedShelf} />
  </Route>

  <Route path ="/" > 

      <FirstPage bookItem={bookItem} selectUsedShelf={selectUsedShelf} />
  </Route>

</Switch>


</BrowserRouter>
</div>

);
}

export default App;



           

