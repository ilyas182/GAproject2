# GAproject2
Book Library Web App
This is a book library web application built using React.js. It allows users to search for books, view book details, and add books to their favorites.

# Features:
- Search for books by title
- View book details including title, author, cover image, and synopsis
- Add books to favorites
- View a list of favorite books

# Deployment: 
- Files uploaded to GitHub
- Deployed live to Vercel
        
# Dependencies:
The project uses the following dependencies:
- react
- react-router-dom

# Folder Structure
The project structure is organized as follows:

- src: Contains the source code files
- components: Contains React components used in the app
- assets: Contains static assets such as images
- App.jsx: The main component that renders the app containing all <Route>
- Home.jsx: Handles the search input by the user
- BookSearch.jsx: Fetch API & displays search results keyed in by user in the Home.jsx component
- Book.jsx: Fetch API of particular book & display book details when user clicks in BookSearch.jsx component. 
Contains 'Add to favourites' button which will do a 'POST' of the book details to Airtable.
- Author.jsx: Fetch API & displays details of author.
- Favourites.jsx: Fetch 'GET' favourites book(s) that was 'POST'



