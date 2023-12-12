// Define a functional React component named 'Book'
const Book = ({ book, editMode, handleEditClick, handleSaveEdit, editedTitle, setEditedTitle, handleRemoveBook }) => (
    // Outer container for a book item
    <div className="book-item">
      {/* Container for the book cover */}
      <div className="book-cover-container">
        {/* Display the book cover image */}
        <img src={book.image} alt={book.title} className="book-cover" />
      </div>
  
      {/* Container for the book details */}
      <div className="book-details">
        {/* Conditionally render either the edit mode or display mode */}
        {editMode === book.id ? (
          // Display input and save button when in edit mode
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className='input'
            />
            <button onClick={() => handleSaveEdit(book.id)} className="save-button">
              Save
            </button>
          </>
        ) : (
          // Display book title, author, and purchase link (if available) when not in edit mode
          <>
            <strong>{book.title}</strong> by {book.author}
            {/* Display a purchase link if 'purchaseUrl' is available */}
            {book.purchaseUrl && (
              <a href={book.purchaseUrl} target="_blank" rel="noopener noreferrer">
                (Buy)
              </a>
            )}
          </>
        )}
      </div>
  
      {/* Container for edit and remove buttons */}
      <div className="edit-buttons">
        {/* Display edit button when not in edit mode */}
        {editMode !== book.id && (
          <button onClick={() => handleEditClick(book.id, book.title)} className="edit-button">
            Edit
          </button>
        )}
        {/* Display remove button */}
        <button onClick={() => handleRemoveBook(book.id)} className="remove-button">
          X
        </button>
      </div>
    </div>
  );
  
  // Export the Book component as the default export of this module
  export default Book;
  