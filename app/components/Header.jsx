// "use client"
import Link from 'next/link';
// import { useState } from 'react';

const Header = () => {
  // const [ menuOpen, setMenuOpen ] = useState(false);
  return (
    <div className='xl:hidden flex justify-between items-center top-0 h-12 w-full pl-2'>
      {/* <button onClick={() => setMenuOpen(true)} className='sm:hidden underline decoration-4 underline-offset-8 mx-8 text-2xl text-blue-900 hover:animate-pulse' >Menu</button> */}
      {/* { menuOpen && <Navigation setMenuOpen={setMenuOpen} /> } */}
      <div className='flex right-0 items-center justify-items-end text-sm md:text-xl'>
        <Link className='block my-6 p-2 text-gray-500 transition-colors duration-200 hover:underline decoration-4 underline-offset-8' href='/'><label className='p-2 animate-pulse'>■</label>
					Rules  ( Japanese )
				</Link>
				<Link className='block my-6 p-2 text-gray-500 transition-colors duration-200 hover:underline decoration-4 underline-offset-8' href='/rulesEn'><label className='p-2 animate-pulse'>■</label>
					Rules  ( English )
				</Link>
				<Link className='block my-6 p-2 text-gray-500 transition-colors duration-200 hover:underline decoration-4 underline-offset-8' href='/how'><label className='p-2 animate-pulse'>■</label>
					How to use
				</Link>
      </div>
    </div>
  );
};

export default Header;