import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='xl:hidden flex justify-between mx-2 mb-2 text-xs text-gray-500'>
      <p className='ml-4 text-blue-900'><label className='text-xl'>みんみん</label><br />minmin</p>
      {/* <p className='ml-4'>NicoNicoDouga</p> */}
      <Link href='https://www.nicovideo.jp/user/21766196' className='md:flex items-center hover:underline decoration-4 underline-offset-8'>
        <Image className='mx-4 animate-pulse' src='/nico.png' alt='youtube' height={30} width={30} /> 21766196
      </Link>
      {/* <p className='mt-8 ml-4'>YouTube</p> */}
      <Link href='https://www.youtube.com/@sadomaru111/videos' className='md:flex items-center hover:underline decoration-4 underline-offset-8'>
        <Image className='mx-4 animate-pulse' src='/youtube.svg' alt='youtube' height={30} width={30} /> @sadomaru111
      </Link>
      {/* <p className='mt-8 ml-4'>Twitter</p> */}
      <Link href='https://twitter.com/rninx234' className='md:flex items-center hover:underline decoration-4 underline-offset-8'>
      <Image className='mx-4 animate-pulse' src='/twitter.svg' alt='twitter' height={30} width={30} /> @rninx234
      </Link>
      {/* <Link href='https://twitter.com/rninx23' className='md:flex items-center hover:underline decoration-4 underline-offset-8'> */}
        {/* <Image className='mx-4 animate-pulse' src='/twitter.svg' alt='twitter' height={30} width={30} /> @rninx23 */}
      {/* </Link> */}
    </div>
  );
};

export default Footer;