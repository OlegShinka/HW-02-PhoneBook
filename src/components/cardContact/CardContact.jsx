import React from 'react';

export default function CardContact({ name, num, id }) {
  return (
    <div>
      <span>name: {name}</span>
      <span>number: {num}</span>
    </div>
  );
}
