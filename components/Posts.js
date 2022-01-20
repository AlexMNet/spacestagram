import React from 'react';
import useSWR from 'swr';
import Card from './Card';
import { ImSad } from 'react-icons/im';
import { DotLoader } from 'react-spinners';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Posts() {
  const { data, error } = useSWR(
    'https://api.nasa.gov/planetary/apod?count=10&api_key=cvQapeKQrk23EHMLhfhOUwzqpfGZeucTdcKTcnR4',
    fetcher
  );

  if (error || (data && data.errors))
    return (
      <main className='flex flex-col h-screen container justify-center items-center mx-auto'>
        <ImSad className='text-8xl text-red-500 animate-bounce' />
        <h1 className='text-center text-6xl font-semibold'>
          Sorry, failed to load content from{' '}
          <span className='text-blue-500'>NASA</span>
        </h1>
        <p className='font-semibold text-gray-500 mt-3'>
          Please refresh the page or contact site admin
        </p>
      </main>
    );

  if (!data)
    return (
      <main className='flex flex-col h-screen container justify-center items-center mx-auto'>
        <DotLoader size={150} margin={10} color={'#3b82f6'} />
        <h1 className='text-center text-6xl font-semibold'>
          Loading content from{' '}
          <span className='text-red-500 font-mono'>NASA</span>
        </h1>
      </main>
    );

  return (
    <main className='flex-1 flex-col container justify-center items-center  mx-auto'>
      {data && data.map((post) => <Card key={post.url} {...post} />)}
    </main>
  );
}
