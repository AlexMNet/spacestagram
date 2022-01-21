import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Pill from './Pill';

export default function Card({ copyright, date, explanation, title, url }) {
  const [readMore, setReadMore] = useState('...Read More');
  const [truncate, setTruncate] = useState(true);
  const [liked, setLiked] = useState(false);

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
    <div className='max-w-md rounded overflow-hidden shadow-lg mx-auto my-16'>
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
      <div className='px-6 pt-1 pb-1'>
        <button
          className='inline-block px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2'
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <FaHeart
              className={`${
                liked && 'animate-heartPulse'
              } text-red-500 text-2xl`}
            />
          ) : (
            <FaRegHeart className='text-red-500 text-2xl' />
          )}
        </button>
      </div>
    </div>
  );
}
