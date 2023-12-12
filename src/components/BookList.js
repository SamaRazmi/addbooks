import React, { useState } from 'react';
import Book from './Book';
import '../styles.css';

const BookList = ({ books, removeBook, editBookTitle }) => {
  // State for edited title and edit mode
  const [editedTitle, setEditedTitle] = useState('');
  const [editMode, setEditMode] = useState(null);

  // Function to handle removing a book
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  // Function to handle clicking the edit button
  const handleEditClick = (id, currentTitle) => {
    setEditMode(id);
    setEditedTitle(currentTitle);
  };

  // Function to handle saving an edited title
  const handleSaveEdit = (id) => {
    editBookTitle(id, editedTitle);
    setEditMode(null);
  };

  return (
    <div>
      <h2>Book List</h2>
      {/* Container for the list of books */}
      <div className="book-list-container">
        {/* Map over the array of books and render a Book component for each */}
        {books.map((book) => (
          <Book
            key={book.id} // Use a unique key for each Book component
            book={book}
            editMode={editMode}
            handleEditClick={handleEditClick}
            handleSaveEdit={handleSaveEdit}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
