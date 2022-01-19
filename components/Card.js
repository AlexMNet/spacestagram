import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Card({ copyright, date, explanation, title, url }) {
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
        <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <button className='inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 transition ease-in-out delay-150  hover:scale-110 duration-300'>
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}
