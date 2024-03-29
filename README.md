# MyReads Project



Udacity's React Nanodegree project in Frond-end web Developing , This project consists of a book shelf app that allows user to categorize books in three categorys "Want To Read" , "Currently Reading" ,"Read".
The project provides an API server which allows the user to presist information during interacting with the application.

## Featueres

- Developed a Book-app using React JS as the final project for the Udacity React Nanodegree 
certification.
- Designed and implemented a bookshelf application that enables users to categorize books 
into three categories: "Currently Reading," "Want to Read," and "Read."
- Utilized an API server to fetch and update book data, demonstrating knowledge of 
asynchronous data handling in React applications.
- Implemented features such as dynamic book categorization, search functionality, and real-time updates to enhance user experience and interactivity.



## Installation

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- run http://localhost:3000/ to open the app





## Backend Server



### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


