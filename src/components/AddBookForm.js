import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  // State for the form inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [purchaseUrl, setPurchaseUrl] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (title.trim() !== '' && author.trim() !== '' && image.trim() !== '' && purchaseUrl.trim() !== '') {
      // Create a new book object
      const newBook = { id: Date.now(), title, author, image, purchaseUrl };

      // Call the addBook function passed as a prop with the new book object
      addBook(newBook);

      // Clear the input fields after adding the book
      setTitle('');
      setAuthor('');
      setImage('');
      setPurchaseUrl('');
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for Title */}
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />

        {/* Input for Author */}
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />

        {/* Input for Image URL */}
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />

        {/* Input for Purchase URL */}
        <label>
          Purchase URL:
          <input type="text" value={purchaseUrl} onChange={(e) => setPurchaseUrl(e.target.value)} />
        </label>
        <br />

        {/* Submit Button */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
