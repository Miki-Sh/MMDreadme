import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='text-center text-sm md:text-2xl text-blue-950'>
      <h1 className='relative py-4 md:text-5xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Rules</h1>
      <h2 className='relative mt-16 mb-8 py-2 md:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Caution</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>This PMX model is &quot;the WITCH from MERCURY&quot; Elan Ceres ( enhanced person No.4 ) for MikuMikuDance created by &quot;minmin&quot;.</li>
          <li><label className='text-red-700'>If you do not follow the terms, you may not use this model.</label></li>
          <li>I will not take responsiblility for any damaged casued by this model.</li>
          <li>Credit me if you use.</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 md:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Not allowed</h2>
        <ul className='pl-8 text-left list-disc'>
          <li><label className='text-red-700'>Do not trouble to the authorship / the copyright holder if you upload contents that are used these data to any web site.</label></li>
          <li><label className='text-red-700'>No commercial use of ANY kind.</label></li>
          <li><label className='text-red-700'>Do not sell this model in any form.</label></li>
          <li>Do not redistribute the original model data.</li>
          <li>Do not trade this model.</li>
          <li>No pornographic work (a.k.a.Porn, R-18, X-Rated, R-Rated, 18+, etc)</li>
          <li>Do not use in political, violent, racist, hateful, sexist, biased, homophobic, religion, etc work.</li>
          <li>Do not claim the model as your own.</li>
          <li>Do not use these model&apos;s any parts to edit the character that doesn&apos;t appear in &quot;the WITCH from MERCURY&quot;.</li>
          <li>Do not edit model to obscene or / and indecent costume.</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 md:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Allowed</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>You can use the model in MMD.</li>
          <li>It can be used in videos, pictures.</li>
          <li>You can edit this model as long as you do not distribute the edit.</li>
          <li>You can edit costume, texture, physics.</li>
          <li><p className='flex items-center'>
            <Link className='hover:underline decoration-4 underline-offset-8 hover:animate-pulse' href='https://bowlroll.net/file/312310'>Download here</Link>
            <Image className='mx-2' src='/key.svg' alt='key' height={20} width={20} />Tell me more about you
          </p></li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 md:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Please</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>If you find this MMD Model Data redistributed by anyone other than me &quot;minmin&quot; on a NON-JAPANESE website, I would greatly appreciate it if you could ask them to delete it.</li>
          <li>If you find any works on a NON-JAPANESE website which do not follow these rules, I would greatly appreciate it if you can ask that individual to delete that video and / or image.</li>
        </ul>
      <h2 className='relative my-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Tools</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>blender ver3.6.5</li>
          <li>MikuMikuDance ver9.32　　Yu Higuchi</li>
          <li>PmxEditor ver0.2.7.3　　kyokuhokuP</li>
          <li>SemiStandardBones plugin　　soboro</li>
          <li>GripsX2　　　kaz</li>
          <li>Leg-outward Morph add Plugin　　nononoP</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 md:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Update history</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>2024/1/13　ver0.54</li>
          <li>2024/2/21　ver0.55</li>
        </ul>
      
    </div>
  )
};

export default Home;