import React, { useState, useEffect } from 'react'; 
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import axios from 'axios';

const API_BASE_URL = 'https://6570367409586eff6640ea15.mockapi.io/api/books';

function App() {
  // State to hold the list of books
  const [books, setBooks] = useState([]);

  // Effect hook to fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to add a new book
  const addBook = async (newBook) => {
    try {
      const response = await axios.post(API_BASE_URL, newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Function to remove a book
  const removeBook = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Function to edit the title of a book
  const editBookTitle = async (id, newTitle) => {
    try {
      // Assume your API supports updating the title directly
      await axios.put(`${API_BASE_URL}/${id}`, { title: newTitle });
      const updatedBooks = books.map((book) =>
        book.id === id ? { ...book, title: newTitle } : book
      );
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error editing title:', error);
    }
  };

  // Main component rendering the UI
  return (
    <div className='container'>
      <h1>Welcome to My React App</h1>
      <p>This is a basic React app with data persistence. Add your favourite books:</p>

      {/* Component to add a new book */}
      <AddBookForm addBook={addBook} />

      {/* Component to display the list of books */}
      <BookList books={books} removeBook={removeBook} editBookTitle={editBookTitle} />
    </div>
  );
}

export default App;
