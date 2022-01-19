import React from 'react';
import useSWR from 'swr';
import Card from './Card';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Main() {
  const { data, error } = useSWR(
    'https://api.nasa.gov/planetary/apod?count=10&api_key=cvQapeKQrk23EHMLhfhOUwzqpfGZeucTdcKTcnR4',
    fetcher
  );

  console.log(data);

  return (
    <main className='flex-1 flex-col container justify-center items-center  mx-auto'>
      {data && data.map((post) => <Card key={post.url} {...post} />)}
    </main>
  );
}
