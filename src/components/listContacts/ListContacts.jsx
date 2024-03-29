import CardContact from 'components/cardContact/CardContact';
import { nanoid } from 'nanoid';
import React from 'react';

export default function ListContacts({ list, onDelete }) {
  return (
    <div>
      ListContacts
      <ul>
        {list.map(item => (
          <li key={nanoid()}>
            <CardContact
              name={item.name}
              num={item.number}
              id={item.id}
              del={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
