import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookSearch from './components/BookSearch'
import { Route, Routes } from "react-router-dom";
import Book from './components/Book';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import User from './components/User/Users';
import UserDetails from './components/User/UserDetails';
import Author from './components/Author';



function App() {
  const [searchResults, setSearchResults] = useState({});

  return (
    <>
    <div>
      <title>Book search app</title>
      <h1>Book search app</h1>
      
      <Routes>
          <Route path="/" element={<Home searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
          <Route path="book" element={<Book/>}/>
          <Route path="booksearch" element={<BookSearch searchResults={searchResults} />}/>
          <Route path="*" element={<NoMatch/>}/>
          <Route path="users" element={<User/>}>
            <Route path=":userId" element={<UserDetails/>}/>
          </Route>
          <Route path="author" element={<Author/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App
