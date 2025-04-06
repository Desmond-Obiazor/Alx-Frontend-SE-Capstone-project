import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="text-red-400 bg-red-100 p-2 rounded w-full max-w-md mb-2">
      {message}
    </div>
  );
}

export default ErrorMessage;
