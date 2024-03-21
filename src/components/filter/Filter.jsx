import React from 'react';

export const Filter = ({ onChangeFilter, filter }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value);
  };
  return (
    <div>
      Filter contacts
      <input
        type="text"
        value={filter}
        name="filter"
        //onChange={e => onChangeFilter(e.target.value)}
        onChange={handleChange}
      />
    </div>
  );
};
