import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 rounded-l bg-gray-100 text-black"
        placeholder="Enter city name"
      />
      <button type="submit" className="bg-indigo-500 px-4 text-white rounded-r">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
