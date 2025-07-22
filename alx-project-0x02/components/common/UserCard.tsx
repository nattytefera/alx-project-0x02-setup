import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white space-y-2">
      <h2 className="text-xl font-bold text-gray-400">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-600 text-sm">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
