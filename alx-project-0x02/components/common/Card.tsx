import React from 'react'
import {CardProps} from '@/interfaces'

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white max-w-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-500">{title}</h2>
        <p className="text-gray-700">{content}</p>

    </div>
  );
};

export default Card;