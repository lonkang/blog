/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d99401094f003f3cf201de8c4cde755c"
  },
  {
    "url": "assets/css/0.styles.2004f155.css",
    "revision": "bcc85be5ab9147230d205cd1690ef138"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b7a07d24.js",
    "revision": "9ed32157e8b0e0dfc9daa98af2b04c79"
  },
  {
    "url": "assets/js/10.3ee79940.js",
    "revision": "b919ef70534d20f916cf9a9961f13fdb"
  },
  {
    "url": "assets/js/11.8829d6cc.js",
    "revision": "b900c9ce447d20f1af98d35f6bdff1b9"
  },
  {
    "url": "assets/js/12.5430d62c.js",
    "revision": "65dfdddb411e70574f0c87bf2a843a6f"
  },
  {
    "url": "assets/js/13.1a980a6b.js",
    "revision": "7171f3b00cf94b327f7a1bb9b1b28d53"
  },
  {
    "url": "assets/js/14.4046e95d.js",
    "revision": "cdbab3a72264d011ab503807aea64304"
  },
  {
    "url": "assets/js/15.44dffc80.js",
    "revision": "3f5984284f6d73308e138be4a85a41be"
  },
  {
    "url": "assets/js/16.642690a5.js",
    "revision": "98a876346f10a813f68a2623117acdcf"
  },
  {
    "url": "assets/js/17.e49ce0da.js",
    "revision": "9573b0ade588c066098b2fa035b62680"
  },
  {
    "url": "assets/js/18.229619fd.js",
    "revision": "bb355deb8d6bbc10226eb569bbc44ab9"
  },
  {
    "url": "assets/js/19.f47047d0.js",
    "revision": "b0d57edd2db144791b73eb5d4b245203"
  },
  {
    "url": "assets/js/20.30dc91f2.js",
    "revision": "c15f0b4e083aa53fe07b61da6d02ccd2"
  },
  {
    "url": "assets/js/21.52e1ff5f.js",
    "revision": "ef281a4655a8d8cae403a896c44377a8"
  },
  {
    "url": "assets/js/22.150bb419.js",
    "revision": "308b099bfa869aedf7c206d95013e100"
  },
  {
    "url": "assets/js/23.5dee3225.js",
    "revision": "8223dce1ee2115ea84ee8dbaf6f9a8c8"
  },
  {
    "url": "assets/js/24.06c7932f.js",
    "revision": "79f2500a5e81286ae6e1b2c8cf935e15"
  },
  {
    "url": "assets/js/25.9edb6e37.js",
    "revision": "ad611269782c5df1c49fbbd2df3e73ad"
  },
  {
    "url": "assets/js/26.08f16055.js",
    "revision": "fbebac57799b7b6ca5927303d18e7b41"
  },
  {
    "url": "assets/js/27.c927996b.js",
    "revision": "e558c7bd7370053bc6061e328b666cf4"
  },
  {
    "url": "assets/js/28.d7c51f47.js",
    "revision": "daf41a6f454fe5423fd4980c09abe241"
  },
  {
    "url": "assets/js/29.fb14351b.js",
    "revision": "72514eac6e85f2c15a2c32761611ba03"
  },
  {
    "url": "assets/js/3.9edc2c3f.js",
    "revision": "9bb5e1d94d5cdb00329c906436a9aec7"
  },
  {
    "url": "assets/js/30.a4178e83.js",
    "revision": "8ecbfb45bf62bda2a2fe75f973f9c014"
  },
  {
    "url": "assets/js/31.194508cd.js",
    "revision": "ae7d4f1614aee7dc7e9e88add2f9b01c"
  },
  {
    "url": "assets/js/4.136dddee.js",
    "revision": "4cb9359982eb512a927bc593dee8cd66"
  },
  {
    "url": "assets/js/5.a6e53fa7.js",
    "revision": "4aef1d7b2c9655bf9fc8703f35c7779a"
  },
  {
    "url": "assets/js/6.d60acf36.js",
    "revision": "f04213693b26db578fb09540a8bc912f"
  },
  {
    "url": "assets/js/7.73bb3f3f.js",
    "revision": "19b114418f6b13a78c37459e8e78adff"
  },
  {
    "url": "assets/js/8.406d6677.js",
    "revision": "5ddaaec07bdeaf099b194ca011ad9e09"
  },
  {
    "url": "assets/js/9.b3b762be.js",
    "revision": "61b7d40f3f82f5a062c1b2fdfcdb1ed2"
  },
  {
    "url": "assets/js/app.07eed152.js",
    "revision": "a20a749ea7e207d3f50eb3954b5f76fe"
  },
  {
    "url": "avatar.jpg",
    "revision": "f2590b5d634bbadb84244c96d10129d5"
  },
  {
    "url": "categories/css/index.html",
    "revision": "351e3f5f9dabe9a5f6a4fa0feecf89c3"
  },
  {
    "url": "categories/git/index.html",
    "revision": "fe0b5ef0571966ab271eeab1b072b64e"
  },
  {
    "url": "categories/index.html",
    "revision": "a34f56acdafe0bbaeae618632cfb7b1c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "c152207ade11d9b854283963dba6d493"
  },
  {
    "url": "categories/node/index.html",
    "revision": "fd099c18b224617c75fc0d7ee9eaad5b"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d4f792603b4963d41ace355a050371ad"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "8db3d7c2e981fdaba72b79ab5e4cf9d6"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "2ef7b3a5a7ade46382983a2f747b9dc2"
  },
  {
    "url": "docs/css/01.chang-jian-de-cssmian-shi-ti.html",
    "revision": "3ad1b8d05a4080671512cb81433af69e"
  },
  {
    "url": "docs/git/index.html",
    "revision": "4876e9830d76cabbc245283e4d9fe1b3"
  },
  {
    "url": "docs/http/01.http.html",
    "revision": "bfe3bd8f4ff6770030eaffc0743dbe1b"
  },
  {
    "url": "docs/js/01.qian-duan-chang-jian-shou-xie-ti.html",
    "revision": "92eb13607ce987694b76d416e50903a6"
  },
  {
    "url": "docs/js/02.-1-2-3-.map-parseint-.html",
    "revision": "ed077fcacf3b98b022c03583ee6ee713"
  },
  {
    "url": "docs/node/01.jsyun-xing-yuan-li.html",
    "revision": "4692b3b85cd04b84010ed076aa1154bc"
  },
  {
    "url": "docs/node/02.nodeji-chu-zhi-shi.html",
    "revision": "91d1cff363a86591a9336987a9a83dfa"
  },
  {
    "url": "docs/node/03.shen-ru-jsmo-kuai-hua.html",
    "revision": "0668c7284919f94922f6c6f7cc2f93b3"
  },
  {
    "url": "docs/node/04.nodezhong-de-chang-yong-nei-zhi-mo-kuai.html",
    "revision": "1f006ea0b5be9a16be0b0e290998b7dc"
  },
  {
    "url": "docs/node/05.npmni-bu-zhi-dao-de-xi-jie.html",
    "revision": "0b6183f81f9d5cf2b18d0a8d7b5d114e"
  },
  {
    "url": "docs/node/06.bufferde-shi-yong.html",
    "revision": "c0ffd509d70a470c26fa129032c89335"
  },
  {
    "url": "docs/node/07.shen-ru-shi-jian-xun-huan.html",
    "revision": "73992d0386a7e9731c574c33379e4535"
  },
  {
    "url": "docs/project/01.element.html",
    "revision": "732c6c47af7c96abb0235411e50cfe0d"
  },
  {
    "url": "docs/vue/vue2yuan-ma/01.vuexiang-ying-shi-zhi-yi-lai-shou-ji.html",
    "revision": "26014d836f6738a4b2f849a1596755b8"
  },
  {
    "url": "docs/vue/vue2yuan-ma/02.vuemo-ban-bian-yi.html",
    "revision": "8eb379ae4ccc62ebc45d3900bdb05ffd"
  },
  {
    "url": "docs/webpack/01.webpackzhong-ru-he-zhuan-huan-esmhe-cjs.html",
    "revision": "5a4308bd065286fc8ffd8510b822dadf"
  },
  {
    "url": "docs/webpack/02.webpackzhong-source-mapde-shi-yong.html",
    "revision": "c6d24e7b97e8d0ea8fa378d706f5c2f0"
  },
  {
    "url": "docs/webpack/03.webpackzhong-de-source-mapyuan-li.html",
    "revision": "01711fbdee3ef515cd5d49d57a3a01b7"
  },
  {
    "url": "docs/webpack/04.webpackzhong-de-hash-chunkhash-contenthashde-qu-bie-shi-shi-me.html",
    "revision": "5bc97d887e9b09a0949cfe7da0126fb9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "46cd16c2e5b191e438eb80b12360af82"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6ee7ccf8965903968742fb31079b7b5f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f7b513d837f693c39ea1afc52c11d5bd"
  },
  {
    "url": "tag/index.html",
    "revision": "a39bd1a48cde401e852c8f6fc0c46de8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0b66bf023561439b842261e871e18ed9"
  },
  {
    "url": "tag/js模块化/index.html",
    "revision": "317a1bb013eb3d89d4bce3e7ffc22435"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2a1db18155f17925456602ebc89a830a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "650d1e9376bb339dc6fa6618e43dec32"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0d40b465c8fc9ff30e13ed7a9b228eaa"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "b4dcb1854577f2a0e35932a5530c411b"
  },
  {
    "url": "timeline/index.html",
    "revision": "59c0ba79e22457d5249032c4620444dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
