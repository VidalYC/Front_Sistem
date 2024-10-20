import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary1 text-white rounded-lg hover:bg-primary2 font-rubik"
    >
      {children}
    </button>
  );
}

export default Button;
