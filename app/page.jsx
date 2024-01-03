import Image from 'next/image'
import Link from 'next/link';

const Home = () => {
  return (
    <div className='m-6 border-2 border-blue-300'>
      <div className='m-4 border-4 border-blue-900'>
        <div className='max-w-2xl mx-auto m-4 p-10 border-2 border-blue-900'>
          <div className='text-center text-blue-950'>
            <h1 className='py-4 text-6xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pt-4 pl-2 float-left text-5xl animate-pulse'>■</label>利用規約</h1>
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>はじめに・注意事項</h2>
              <ul className='pl-4 text-left list-disc'>
                <li>このモデルは私個人が趣味で作成した非公式MMDモデルです。公式様にご迷惑をかける使用方法は禁止します。</li>
                <li><label className='text-red-700'>規約違反があった場合は、当モデルの使用を禁止します。</label></li>
                <li>当モデルの使用により発生したいかなる損害、損失、不利益に対して一切の責任を負いません。</li>
              </ul>
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>禁止事項</h2>
              <ul className='pl-4 text-left list-disc'>
                <li>公式様のご迷惑となり得る使用方法</li>
                <li>商用利用</li>
                <li>当モデルのオリジナルデータの二次配布</li>
                <li>宗教的利用、政治的利用、エロ・グロなどR指定のつく作品への使用</li>
              </ul>
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>やっていいこと</h2>
              <ul className='pl-4 text-left list-disc'>
                <li>ボーン追加や衣装の変更などの改造</li>
                <li>このモデルの衣装を他のモデルのお着替えに使用すること</li>
                <p className='text-red-700'>（※ お着替えするモデルの利用規約をよく読み必ず守ってください）</p>
              </ul>
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>水星の魔女のキャラクターに限る特例</h2>
              <div className='text-left'>
                　水星のMMDの動画をもっともっと観たいので、水星の魔女に登場するキャラクターのMMDモデルを作成する場合に限り、
                当モデルのデータを改造して作成したモデルの作成と再配布を認めます。<br />
                　例えば、
                <ul className='py-4 pl-4 text-left list-disc'>
                  <li>当モデルの制服部分のデータを流用してノレアのMMDモデルを作成し配布する。</li>
                  <li>当モデルの顔が気に入らないので自分でもっとカッコよく改造して完璧な4号くんモデルを作成し配布する。</li>
                </ul>
                というような利用方法も可とします。ただし、<label className='text-red-700'>女の子のキャラなのに首から下は男性のまま等の、雑な改造は禁止</label>とします。
                完璧にしろとは言いませんが、キャラに愛のある改造をお願いします。<br />
                　当モデルを元に作成したモデルを配布する場合は、<label className='font-semibold underline'>当モデル配布動画をニコニコ動画のコンテンツツリーに登録</label>または、
                <label className='font-semibold underline'>配布データのreadmeなどに当モデルを改造し作成した旨を記載</label>お願いします。<br />
                　水星の魔女という作品が、エラン・ケレスというキャラが大好きで、もっとエランさんや水星の魔女のMMD作品が増えて欲しいとの願いから、
                上記の特例を設けました。拙いながらもモデルを1から作成して配布に踏み切ったのも、水星のMMDが少しでも発展する一助になればとの願いと、
                今まで他ジャンルMMDで様々な配布データを使用させていただき、作品を作ることができたことへの感謝の気持ちからです。<br />
                当モデルデータを使用する皆さんが、水星の魔女という作品、キャラククター、MMDという文化を愛して守ってくださることを信じています。
              </div>
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>更新履歴</h2>
            
            <h2 className='mt-16 mb-8 py-2 text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='pl-2 float-left animate-pulse'>■</label>作者連絡先</h2>
              <div className='flex items-center'>みんみん　X(Twitter)<Link href='https://twitter.com/rninx234'><Image src='/public/twitter.svg' alt='twitter' height={20} width={20} />@rninx234</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;