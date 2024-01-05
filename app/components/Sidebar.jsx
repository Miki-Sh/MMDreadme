import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
	return (
		<div className='flex-col sm:flex-row sm:justify-around mt-10 text-blue-900'>
			<div>
				<h1 className='relative w-full mb-4 p-2 pl-10 bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 text-3xl animate-pulse'>■</label>
					Elan Ceres<br />(enhanced person No.4)
				</h1>
				<Link className='block my-6 p-2 text-xl text-gray-500 transition-colors duration-200 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent' href='/'><label className='p-2 animate-pulse'>■</label>
					Rules  ( Japanese )
				</Link>
				<Link className='block my-6 p-2 text-xl text-gray-500 transition-colors duration-200 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent' href='/rulesEn'><label className='p-2 animate-pulse'>■</label>
					Rules  ( English )
				</Link>
				<Link className='block my-6 p-2 text-xl text-gray-500 transition-colors duration-200 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent' href='/'><label className='p-2 animate-pulse'>■</label>
					How to use
				</Link>
			</div>
			<h2 className='relative mt-16 mb-8 p-2 pl-10 bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 text-3xl animate-pulse'>■</label>Created by</h2>
			<div className='text-xl text-gray-500'>
				<p className='ml-4 pb-6 text-2xl text-blue-900'><label className='text-4xl'>みんみん</label>   ( minmin )</p>
				<p className='ml-4'>NicoNicoDouga</p>
				<Link href='https://www.nicovideo.jp/user/21766196' className='flex items-center py-2 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent'>
					<Image className='mx-4 animate-pulse' src='/nico.png' alt='youtube' height={30} width={30} /> 21766196
				</Link>
				<p className='mt-8 ml-4'>YouTube</p>
				<Link href='https://www.youtube.com/@sadomaru111/videos' className='flex items-center py-2 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent'>
					<Image className='mx-4 animate-pulse' src='/youtube.svg' alt='youtube' height={30} width={30} /> @sadomaru111
				</Link>
				<p className='mt-8 ml-4'>Twitter</p>
				<Link href='https://twitter.com/rninx234' className='flex items-center py-2 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent'>
				<Image className='mx-4 animate-pulse' src='/twitter.svg' alt='twitter' height={30} width={30} /> @rninx234
				</Link>
				<Link href='https://twitter.com/rninx23' className='flex items-center py-2 hover:text-blue-900 hover:bg-gradient-to-r from-blue-200 to-transparent'>
					<Image className='mx-4 animate-pulse' src='/twitter.svg' alt='twitter' height={30} width={30} /> @rninx23
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;