import React from 'react';

export default function CardContact({ name, num, id, del }) {
  return (
    <div>
      <span>name: {name}</span>
      <span>number: {num}</span>

      <button
        type="button"
        onClick={() => {
          del(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
