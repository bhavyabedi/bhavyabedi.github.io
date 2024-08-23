'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5f60d486d920adf08125b25b765bb7cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66d88d6eaf876182542978285d9f6cf3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a9b6790db6792b64c41e0a6460126b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4e58053f1c6d529a7198c76348e6bdd",
".git/logs/refs/heads/main": "702ad0e1dbbdfc6daedc5b77b1bf0668",
".git/logs/refs/remotes/origin/main": "e27fcac31919d060ae80aae42d8c2bb3",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/06/27c685abaac2195bed301a8ae06e2efd96e850": "6a589727fcc7f924c0817c8ecfdb84a9",
".git/objects/07/d2551900309db8c158c320a549498b6c4779f3": "1f42a6bbca247b80727e8175342ee27c",
".git/objects/0a/57dd700634a14a0d2c8d3a76a10f8589d00a88": "b48f642d4125b5e3cb1a4522a0dc5128",
".git/objects/0e/1271b28433f73178e2c2820c7cd20a86fa6637": "d51ef7b8b93de57e2bbad539d8c29b40",
".git/objects/0e/b7fba6e69a97dd54b75b5e7dad0852cb57249b": "10913add7fa0582583d9e09160ad5796",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/4e5a76daeea1d38151b35103fd2f6fb8526ceb": "eae384316e308ab50b91b6e711c74459",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/bb7ba55b19faefa6672c16b35c4efc2b1e2a4d": "e8e5b22ef006bdf774a65a0e8887e650",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/objects/27/eafc1d4d19cb5765ac0d78e836f83a592d3def": "591b18d193857f632aea2aaba7db556b",
".git/objects/2d/2888fdc8ede2d5150cf5c09056b81b54f2dbff": "38919345b0716c1af8865a9148bd32e8",
".git/objects/2d/b7c48fe31ee39e46e70e06b71e95215358af9e": "ff99a44cc9b844a17b14eb4dc37f0a51",
".git/objects/2f/5270e69b6f50dd179eaafb4122798c56701a8c": "acf8b9744b9745737b32b6daf7134b15",
".git/objects/32/924f2de24be8fbace5c23c08b97309a99567cc": "258adb5e74f202031eacbbc0de97a997",
".git/objects/34/e10ef3c78a95ebea89f2718df787f7afae877a": "9efeafe39d8fb858ff062448f56f67d8",
".git/objects/35/9de3eebe2a1ad0d34d49e19d1e30a2165fa130": "05c63dc259e47c81771cd982a13c0477",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/e85bdaeb9e670217e1131d1bdb94f3aa715bd5": "1666e2b301dc07a352ccd05874d73551",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/f5b4c2d27d8b181d095d30b57a3d3101aa8953": "921011df526576f7772ab88fbbe47067",
".git/objects/51/bfc1f2de20f6be479a285e3730ee2b70dfe764": "cc73bbd02f02e2eb30e0cf5752caa7d3",
".git/objects/53/3838a3fbfa67692d31f34562d113ed9857b1de": "cd53eb3cf5502345b28b61d4019a6d4c",
".git/objects/57/b37fd1be8a9c9fef83b3307c043348c2770df6": "bd4c6c49a6a91ba728c26cc7b8cc8c43",
".git/objects/58/17fd9eae00bb7e7e9acfd3f8bf0cdfc22ce123": "5172cc39bdd740807864089e6b9418b2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/60/8884e0c82abfa5d3c35384ae3ce9d538c442ec": "76f6786e5399d49106e80c73b219b6f2",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/a7341bda3ff344b7126cde5225f282f98276fe": "2e76a2571fc9d0dbb42e2cd7378cb283",
".git/objects/67/0faf5d6e1154a489d0150a46af61d26203723f": "14a0ceda0efc9a2729cb4cd2340d7348",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/83562588b56fadcc882123578b3fcd4f7f9d3f": "c47be3222b6ecede4b5e5552be13fefe",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/79/68d486d8ea2b44adb430c0a5f5db69a361c78b": "eb8a3ef45d7dd5b78704436114059a1a",
".git/objects/7a/c39cc8ebadbf046fa0379ca3249230c0f5bc6d": "0064dd4d218ca051e01eaf86935faf10",
".git/objects/7d/b76700233a0d94fd7b00d2c41e4c87622fe8d1": "015fd91b52e20b573e3d8036709a9ec0",
".git/objects/84/309eaf5dae23601f01eafaab2e1b965393b8b5": "e1282ce88073293fc4a229092c5dc4a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7332f9bb7265c5d0b358eb4408b5345ee78a9a": "5eb06caa2a1ecd40e62184478464d33c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b4fad4ed67371391fe6ff26b82fa50ed3c5dbd": "2ad00dcaf780d59f05a77377c25977a4",
".git/objects/8d/fb0890ef713ef1daf436ef8e1932a2cfee29c0": "98dfb7a55af3bb135d3a20bdcea1dacb",
".git/objects/94/cad38986a74c53bc504fa27df8404824a65f93": "957a12a021e5099705bb36372f3c026c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/3503c594d9b66334d99601c5bf45c0e70818b6": "96deb60862225582fcd849fcdddd530a",
".git/objects/97/70910f69c60a7314d6645a1ed7beef95b989b5": "c08b9b64b3d4faa292ccf809f6362741",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/ad/76ae0c7d1ec3a2f24235905371899586c49fd9": "741ddd8d70253e52eeb7e341f8b2e6d2",
".git/objects/b2/9049ff9e07d0f3d5a35a85f62f30a7c54ff481": "fd8c0520bf6011531680a189221a4336",
".git/objects/b3/b2adcd15bafe1934345a1b21cb500cb6a4eb6e": "7cb1e167bd7f1f171ce44c394db71800",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/6b748cac05dd76b4c1faf18551306bfc3a0921": "54fb0eac13715acfe399a99ce20c08e9",
".git/objects/b5/8528a180b5e8c33723ecee4692959449f2eeb7": "b02db3faf66e8e710733fa86fcd20312",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/132cea880b92db965f4f3fad0f8b389a8a1a57": "138fe40bab9f2a651f2ece8a5c51d202",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/7c8e6e880cf4b25ba351ce7b6eec1142f2c90a": "51fe62e49fc8fa16c7c800dcf71a6088",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/4cf1033faeedbf765d2c3d21e44eef4a38cf37": "ff904318600907a2812113074f1f3d73",
".git/objects/e0/5f82d2a8e7eb97f18fa66f4501ef6c285af8fa": "5af19ef3252b95ab9b56d33b21d13f8a",
".git/objects/e3/6f14943504f7c3430133558ba53750b7d30d7a": "ef038f9609fc893be1b221268aac3bf9",
".git/objects/eb/5ff88afe840c8673f0e9d224c9e902b6e02f94": "4b128bea3cbbfc69cdb7c824854e7ea9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8aef1b2de6b50b9fdf32551a4643433e021bcf": "3d915fec53956abc033db6fbf4150a44",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2b082c4fede86feb682476d90a9e594326894b": "ee91f8fd1a0e8d1e046acf7d0b2ea025",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/fc/b0389017fab4e7d28763ebc2d9748879abe4c1": "ac8b8a7b43c023d79dd43b980e25e350",
".git/objects/ff/50182dd38236ad34f26dc48ae081544df2216f": "af0cdd6b122d86bd4c4da8d0f66c6ea3",
".git/refs/heads/main": "f7791d678128d47727132e2fa2333d73",
".git/refs/remotes/origin/main": "48f48334d574290a71f3cac2c7733dc3",
"assets/AssetManifest.bin": "925c3f2b46b2054d2fa54eef6f9793be",
"assets/AssetManifest.bin.json": "64c162205be77ffea2ef2ee38d9ae278",
"assets/AssetManifest.json": "0347a05e78baa7558a67ac09d74d017c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6896f225fb945bb920d3399c446d0077",
"assets/NOTICES": "8a1a94c01bdf2ff993476d1855afdd48",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "70b585e8791dd0ca73378d2418200101",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d29ecb2aee260fad72842193339e5f6f",
"/": "d29ecb2aee260fad72842193339e5f6f",
"main.dart.js": "8f0293b47abd61817867d8835f28f834",
"manifest.json": "274d066c072a106513f17ee9da56e352",
"version.json": "3a40f95976e9752c0960613816ebe2a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
