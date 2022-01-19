export default function Footer() {
  return (
    <footer className='flex-1 py-4 border-t justify-center items-center absolute bottom-0 left-0 w-full'>
      <p className='text-center'>
        Alex Maldonado &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
