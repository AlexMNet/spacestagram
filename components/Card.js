import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Pill from './Pill';

export default function Card({ copyright, date, explanation, title, url }) {
  const [readMore, setReadMore] = useState('...Read More');
  const [truncate, setTruncate] = useState(true);

  const handleOnClick = (e) => {
    e.preventDefault();

    if (readMore === '...Read More') {
      setReadMore(' Read Less');
      setTruncate(false);
    } else {
      setReadMore('...Read More');
      setTruncate(true);
    }
  };

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mx-auto my-16'>
      <Image
        layout='responsive'
        placeholder='blur'
        blurDataURL='/assets/images/blur.jpeg'
        priority={true}
        width={200}
        height={200}
        src={url}
        alt={title}
      />
      <div className='px-6 py-4'>
        <div className='mb-2'>
          <p className='font-bold text-xl'>{title}</p>
          <Pill>{date}</Pill>
        </div>

        <p className='text-gray-700 text-base'>
          {truncate
            ? explanation.substring(0, 200)
            : explanation.substring(0, 10000)}
          <a
            href='#'
            onClick={handleOnClick}
            className='font-bold text-blue-500'
          >
            {readMore}
          </a>
        </p>
        {copyright && (
          <div className='mt-3 text-gray-400'>
            <small>photo by: {copyright}</small>
          </div>
        )}
      </div>
      <div className='px-6 pt-4 pb-2'>
        <button className='inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 transition ease-in-out delay-150  hover:scale-110 duration-300'>
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}
