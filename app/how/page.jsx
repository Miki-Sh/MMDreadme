import Link from "next/link";

const Home = () => {
  return (
    <div className='font-kokugo text-center sm:text-2xl text-blue-950'>
      <h1 className='relative py-4 sm:text-5xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>使う時のアドバイス</h1>
        
        <ul className='pt-8 pl-8 text-left list-disc'>
          <li>素人が手探りで作ったので、貫通やら破綻やら修正できてません。上手いこと誤魔化して使うか自分で直して使ってください。</li>
          <li><Link className='font-semibold underline decoration-3 underline-offset-4 hover:animate-pulse' href='https://q-ku.blog.jp/archives/11315486.html'>こちらのブログ記事</Link>を参考に、実験的に襟ボーンと袖ボーンを導入しています。
            くわしくは、以下の「首まわりのこと」「腕のこと」の項目を読んでください。
          </li>
        </ul>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>表情モーフのこと</h2>
        <div className='text-left'>
          　基本的な表情モーフしか入ってないです。4号くんなので控えめにしました。<label className='text-sm text-gray-400 line-through'>（いっぱい作る技術力ない）</label><br />
          　変わったモーフは鼻と口のエッジ消しくらいですね。エフェクトなしで正面から見ると鼻と口が無いように見えるので、当モデルは、メッシュで鼻と口のエッジを無理矢理作ってます。横顔だとMMDのエッジと両方出て見た目がよろしく無いので、アップの時なんかはモーフで消すと良いでしょう。
          リアル系のシェーダー使う場合は最初からモーフで消しといた方が良さそうです。
        </div>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>首まわりのこと</h2>
        <div className='text-left'>
          　制服の詰襟部分と胸元のリボンの首に近い部分は襟ボーンに連動しています。横を向く際に首を捻る動作の時に、襟周りやリボンが破綻しづらくなっています。
          ですが、真上/真下を見るような動きでは、やはり首が貫通するので、モーション修正するか、カメラアングルでごまかしてください。
        </div>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>腕のこと</h2>
        <div className='text-left'>
          　腕、特に腕をねじって曲げる動作時のひじの破綻が上手く修正できてません...<label className='text-sm text-gray-400'>（誰か直してください）</label>腕捻りボーンを導入しているので、できればそちらを使用していただけると幾分かはマシになると思います...
          配布モーションを使用される場合は、<Link className='font-semibold underline decoration-3 underline-offset-4 hover:animate-pulse' href='https://www.nicovideo.jp/watch/sm25887049'>腕とか肘の捩じれを捩ボーンに分配するツール</Link>
          というツールも配布してくださっているので、そちらを使われると良いかもです。<br /><br />
          　ここからは、当モデルの構造の話です。前腕の服のウェイトがちょっと変わってまして、内側の袖は、普通にひじボーンと腕捻りボーンに連動してますが、外側のふわっとした袖のひじから先は袖ボーンに連動してます。
          襟ボーンと同じ理屈なので、捻りでの袖グシャア現象が若干マシですが、結局のところひじを100°以上曲げれば内側の袖なんかが貫通してチラチラ見えます。<label className='text-sm text-gray-400 line-through'>（誰かどうにかして）</label>試行錯誤中なのでもしかしたら今後構造全く変えるかもです。
        </div>
      <h2 className='relative mt-16 mb-8 py-2 sm:text-3xl bg-gradient-to-r from-blue-200 to-transparent border-l-2 border-b-2 border-blue-900'><label className='absolute left-2 bottom-1 animate-pulse'>■</label>終わりに</h2>
        <div className='text-left'>
          　要するに、絵も描けないモデリング初の素人が推しへの愛だけで作った代物です。出せるものは全部出し尽くしたので、ここ気に入らないとか不具合あっても自分には直せません。ごめんなさい。もっと優秀な方がもっとエランさんの良さを再現してくださるのでは？という希望的観測もあり、モデル改造の規約ゆるめにしてます。
          ただ、作者がけなされるのはまだ納得ですが、エランさんが酷い目に遭うのは見たくないので、当モデルをパーツ扱いするとかの酷い扱いはしないでくださいね。（強化人士はペイルで消費パーツ扱いされてきたので、MMDでまでそういう扱いされてほしくないのです...）
          とはいえ、自分も本編シーン再現とか作品に入れたくなる人なので、判断基準は本編に出てた表現まではOKとします。<br />
          　いろいろ書きましたが、これを機に、MMDやモデリングに気軽に手を出してくれる人が、一人でも増えてくださればそれだけで本望です。MMD最高！エラン・ケレス最高！<br /><br />

          　なんでこのページは英語版無いのかって？作者が英語できないからです。同様の理由で、きちんと細かい意図まで伝えられないので、英語版と日本語版で若干規約も変えてます。
          日本語版の規約の意図まできちんと理解して守ってくだされば、日本以外の方でも日本語版規約に沿って使っていただいて大丈夫です。（逆に言うと、きちんとこちらの意図が汲み取れない方は、たとえ日本人でも利用禁止です）
        </div>
    </div>
  )
};

export default Home;