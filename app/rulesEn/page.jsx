const Home = () => {
  return (
    <div className='text-center text-2xl text-blue-950'>
      <h1 className='relative py-4 text-6xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 text-5xl animate-pulse'>■</label>Rules</h1>
      <h2 className='relative mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Caution</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>このモデルは私個人が趣味で作成した非公式MMDモデルです。水星の魔女公式様にご迷惑をかける使用方法は禁止します。</li>
          <li><label className='text-red-700'>If you do not follow the terms, you may not use this model.</label></li>
          <li>I will not take responsiblility for any damaged casued by this model.</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Forbidden</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>公式様のご迷惑となり得る使用方法</li>
          <li>No commercial use of any kind.</li>
          <li>Do not sell this model in any form.</li>
          <li>Do not redistribute the original model data.</li>
          <li>Do not trade the original model data.</li>
          <li>No pornographic work (a.k.a.Porn, R-18, X-Rated, R-Rated, 18+, etc)</li>
          <li>Do not use in political, violent, racist, hateful, sexist, biased, homophobic, religion, etc work.</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Allowed</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>ボーン追加や衣装の変更などの改造</li>
          <li>このモデルの衣装を他のモデルのお着替えに使用すること</li>
          <p className='text-red-700'>（※ お着替えするモデルの利用規約をよく読み必ず守ってください）</p>
        </ul>
      
      <h2 className='relative mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>Update history</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>2024/1/1　distribute</li>
        </ul>
      
    </div>
  )
};

export default Home;