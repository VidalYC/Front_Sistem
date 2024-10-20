import React from 'react';

function Card({ title, children, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-90 mb-4">
      {image && <img className="w-full" src={image} alt={title} />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">{children}</div>
      </div>
    </div>
  );
}

export default Card;
