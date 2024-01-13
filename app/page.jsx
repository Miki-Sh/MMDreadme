import Link from 'next/link';
import Image from 'next/image';
import Accordion from '/app/components/Accordion';

const Home = () => {
  return (
    <div className='font-kokugo text-center text-xl sm:text-2xl text-blue-950'>
      <h1 className='relative py-4 sm:text-5xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>利用規約</h1>
      <h2 className='relative mt-16 mb-8 py-2 pl-10 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>はじめに・注意事項</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>このモデルは私個人が趣味で作成した非公式MMDモデルです。水星の魔女公式様のご迷惑となり得る使用方法は禁止します。</li>
          <li><label className='text-red-700'>規約違反があった場合は、当モデルの使用を禁止します。</label></li>
          <li>当モデルの使用により発生したいかなる損害、損失、不利益に対して一切の責任を負いません。</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>禁止事項</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>版権元のご迷惑となり得る使用方法</li>
          <li>商用利用</li>
          <li>当モデルのオリジナルデータの二次配布</li>
          <li>宗教的利用、政治的利用、エロ・グロなどR指定のつく作品への使用</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>やっていいこと</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>ボーン追加や衣装の変更などの改造</li>
            <p className='text-red-700'>（※ R指定のつくような衣装への変更は禁止します）</p>
          <li>このモデルの衣装を他のモデルのお着替えに使用すること</li>
            <p className='text-red-700'>（※ お着替えするモデルの利用規約をよく読み必ず守ってください）</p>
          <li><p className='flex items-center'>
            <Link className='hover:underline decoration-4 underline-offset-8 hover:animate-pulse' href='https://bowlroll.net/file/312310'>ダウンロードはこちら</Link>
            <Image className='mx-2' src='/key.svg' alt='key' height={20} width={20} />Tell me more about you
          </p></li>
        </ul>
      <Accordion
        title={ <h2 className='pl-10 2xl:pl-72'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>水星の魔女のキャラクターに限る特例</h2> }
        text={
          <div className='text-left'>
            　水星のMMDの動画をもっともっと観たいので、水星の魔女に登場するキャラクターのMMDモデルを作成する場合に限り、
            当モデルのデータを改造して作成したモデルの作成と再配布を認めます。<br />
            　例えば、
            <ul className='py-4 pl-8 text-left list-disc'>
              <li>当モデルの制服部分のデータを流用してノレアのMMDモデルを作成し配布する。</li>
              <li>当モデルに自身で作成した衣装を着せたモデルを配布する。<label className='text-red-700'>（※ 自作の衣装に限ります）</label></li>
              <li>当モデルの顔が気に入らないので自分でもっとカッコよく改造して完璧な4号くんモデルを作成し配布する。</li>
            </ul>
            というような利用方法も可とします。ただし、<label className='text-red-700'>女の子のキャラなのに首から下は男性のまま等の、雑な改造は禁止</label>とします。
            完璧にしろとは言いませんが、キャラに愛のある改造をお願いします。<br />
            　当モデルデータを元に作成したモデルを配布する場合は、<label className='font-semibold underline'><Link className='hover:animate-pulse' href='https://www.nicovideo.jp/watch/sm43259321'>当モデル配布動画</Link>をニコニコ動画のコンテンツツリーに登録</label>または、
            <label className='font-semibold underline'>配布データのreadmeなどに当モデルを改造し作成した旨を記載</label>お願いします。<br /><br />
            　水星の魔女という作品が、エラン・ケレスというキャラが大好きで、もっとエランさんや水星の魔女のMMD作品が増えて欲しいとの願いから、
            上記の特例を設けました。拙いながらもモデルを1から作成して配布に踏み切ったのも、水星のMMDが少しでも発展する一助になればとの願いと、
            今まで他ジャンルMMDで様々な配布データを使用させていただき、作品を作ることができたことへの感謝の気持ちからです。<br />
            　当モデルデータを使用する皆さんが、水星の魔女という作品、キャラククター、MMDという文化を愛して守ってくださることを信じています。
          </div>
        }
      />
      <h2 className='relative my-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>使用ツール</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>blender ver3.6.5</li>
          <li>MikuMikuDance ver9.32　　樋口優</li>
          <li>PmxEditor ver0.2.7.3　　極北P</li>
          <li>準標準ボーン追加プラグイン　　そぼろ</li>
          <li>Grips 手握り・拡散ボーン追加プラグイン　　kaz</li>
          <li>がに股モーフ追加プラグイン　　のののP</li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>更新履歴</h2>
        <ul className='pl-8 text-left list-disc'>
          <li>2024/1/13　配布開始 ver0.54</li>
        </ul>
    </div>
  )
};

export default Home;