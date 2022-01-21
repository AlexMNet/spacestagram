export default function Pill({ children }) {
  return (
    <small className='text-white bg-red-500 rounded-full py-1 px-2'>
      {children}
    </small>
  );
}
