export default function Pill({ children }) {
  return (
    <small className='text-white bg-emerald-300 rounded-full py-1 px-2'>
      {children}
    </small>
  );
}
