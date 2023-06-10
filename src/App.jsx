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



function App() {
  const [searchResults, setSearchResults] = useState({});

  return (
    <>
    <div>
      <h1>Book search app</h1>
      
      <Routes>
          <Route path="/" element={<Home searchResults={searchResults} setSearchResults={setSearchResults}/>}/>
          <Route path="book" element={<Book/>}/>
          <Route path="booksearch" element={<BookSearch />}/>
          <Route path="*" element={<NoMatch/>}/>
          <Route path="users" element={<User/>}>
            <Route path=":userId" element={<UserDetails/>}/>
          </Route>

      </Routes>
    </div>
    </>
  )
}

export default App
