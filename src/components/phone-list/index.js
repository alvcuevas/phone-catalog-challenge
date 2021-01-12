import React from 'react';
import PhoneCardComponent from '../phone-card';

const PhoneListContainer = ({ list }) => {
  return (
    <>
      {list.map(phone => (
        <PhoneCardComponent key={phone.id} phone={phone} />
      ))}
    </>
  );
};

export default PhoneListContainer;
