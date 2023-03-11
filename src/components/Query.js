import { useEffect } from "react";
import { useState } from "react";
import * as BooksAPI from '../BooksAPI';
import { Link } from "react-router-dom";
import Boook from "./Boook";



const Query = ({bookItem,selectUsedShelf}) => {

  const[query,setQuery] =useState("");
  const [queryList,setQueryList]=useState([]);



  // Timer used to delay the request from the client until finish writting to avoid many requests on the server API.

  useEffect(() => {
    const timer = setTimeout( ()=>{
        

        if(query) {
            const searchResult =  BooksAPI.search(query);
            searchResult.then((data) => {

              // To avoid error result to not show to the client while searching if entered unvaild query.

            if(data?.error || data === undefined){

                setQueryList([]);
            }

            // To change the book shelf on the API result if it was in the Main page and avoid default value in select menu.


            else {
                data?.map((bookSearched) => {

                    bookSearched.shelf ="none";

                    bookItem.forEach ((mainBook) => {
                        if (bookSearched.id === mainBook.id){
            
                            bookSearched.shelf = mainBook.shelf;
                        }
                    }
                    )
                    
                });
                setQueryList(data);
            }})

        }
        else{
            setQueryList([]);
        }
   
    } ,300);

    return () => { 

    clearTimeout(timer); } }, [query,bookItem]  );



   
        return( 
        <div className="search-books">
        <div className="search-books-bar">
          <Link to ="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" 
            value={query} onChange={(e)=>{setQuery(e.target.value)}} />
        
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {queryList?.map(b => (
                <li key={b.id}>
                <Boook book={b} selectUsedShelf ={selectUsedShelf}/>
                </li>)
    
            )}
          </ol>
        </div>
      </div>

        );
};
export default Query;

