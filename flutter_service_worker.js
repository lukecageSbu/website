'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5232acc01d746149ac130caaa4feab25",
"version.json": "68152af73c0c3871f2b8cab4b69e5a11",
"index.html": "df02aaf78acb86de91423b7c8a44f43b",
"/": "df02aaf78acb86de91423b7c8a44f43b",
"main.dart.js": "35e5e68b76747a7e9ee9eab214b6ed95",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1f340e0d02d595463f43fff78a3583b",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=13fafdd2057fbf78fdb1218defb37423-json": "f49f448c915566c1afbf1dee75958342",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=c0c6035a759f5cd44b836538f059586f-json": "b3e33e9bbf6b913ee0962647daf0f99a",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=8976e82d5a6ed478e7b8618e113b66a9-json": "18ccd0e63c3bd5540990dd0ea89572ec",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f7e0f28c6be42fa2312206ad0a10ff00-json": "eb8147a75d3a7c9e07858aa90cb807ab",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=eccb437fa4f4bd0e2198fdf4b9c6f1ba-json": "05245feeb444c8f94e967d8a68e52872",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d80bb1fdc080ddd7b3ea3f1910146f3a-json": "58d852f542ea4b5d60dc5f8ed5aae30c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a258f4f63bed4bb1282273926bf5b059-json": "81e67bf6c53d45c64405e4e2eb7725a3",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=70dcf17e83e4a6222ac21463c5b08fe7-json": "c30a7a84835e09cdd97f7ce09807a8cb",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f45dff7e40571d160f6d41007681c634-json": "b371dd2d334d56041582685b04c8a4e8",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=ec3b59a597808e51cb766957614c5356-json": "3bfdb6017a6625e0c12e54fb8de29b31",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a5261de91916aa54e7ab4c7f9e8b7b14-json": "932b2ffe36b65123f8d037b0de439fd3",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d974848a49f8382ba254097501b8cf5a-json": "298eaf35dee109e8b727bb1c3c2145a9",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=996ff6882fede577613d6755f472c997-json": "d414c3814109611053643eea16b6d093",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=c659faa472081b46da96aa6c6400b130-json": "af677414119aeaf72e72531a23bac0e6",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=ecd52e127039613bababe8aecd5df587-json": "4608af4f1b1a57b4b6ebcfbe21a1f7d0",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=224c068695b2a47bf1ad1c2ab929f8d0-json": "cc60a4b45fb8238d469f468ef873cf38",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=99205e7dc8ec20535f2d902a370e29d1-json": "d9e5e193282ce955853fecc346e00dd1",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=90aad768bbe0547580be6fa21f0b255e-json": "99d8eaface14e6ffa81d761b596cb1de",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=3f1504ab6e77d29b8489c37b06981e19-json": "aab8a7a4021ee7663381b59b776b982e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=4399669832bd0507ba2dc99541f7a01e-json": "cab172fd45461f06095e0fb6c66fd3cf",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=32edecb03c82d111684fa158cc3a8d0b-json": "c623f6b0b85fb6ba5e37a7c386822abf",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d428851f80d861f2b5ba47107a87aeac-json": "5bdcf5e7e1f781e3c2a209c12519929f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=bbda4764dddb47486fa3fe7eb91c1bcd-json": "8a3e331a2044c4e47582f2d038cbbab5",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=9e81f027d3662bcf1bace6a4141ede0f-json": "b2680f78893f6b3ba9f70ac953d354f3",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=07356deb99be61cffb428af37e6f405e-json": "2ec52a522026c6d916e54a742e716b91",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=4949280dce06d75fb55557f237a99559-json": "53113f64fb9a8c4a856fc0b0473cc252",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=7b593e0f833e9759cce426e0e96b0cd9-json": "7d837594f264e3a13bcbc7749eaedd80",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=7b4ae697e3c2fb2eaa40d3d9964865a6-json": "5fe2d2686f2bdd77d2fc91b0169c7198",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=2f3b475ee610885be820029cb392724d-json": "49fc8a6f222cff9bf060f6a9c1403e0e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a7ae96b89dc1629df77651696fc06c5a-json": "09be4a69f8b5b983ad3ff786c8c49229",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=1a0fbc1e5a416c3a1b33a76734b17e3b-json": "6c2dfeb701ebff784bef90d2e1f9cb8d",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=1554c77b74b3d30c466dc2acac3f3094-json": "e578e0ab66b7c6f84618a0160c814cbd",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=e3729137fb48f9e59fd28a837954a465-json": "c772d0a4a5d33e9bb1d2f133993e446b",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=26ed8e0f8bd0509201cb7f0abba6b65f-json": "d2f4937dc0976aae7aba13efd05ba89c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=8f430be35c14cdb002f24a1d6470442d-json": "26bee087ee2449d4a1619cfd03d88f4e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=4fadb484877b2c2c07be51cbe5a0857a-json": "5666113378b803a7ac5f63210a808596",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=61c4da7145952ce4592d17f4c49a9ee3-json": "fb334d5ba848d997753b01a3420d223c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=b2d87c9faaa77a1f8c706f3ade6e092e-json": "df3477b7606a45cdc856dd0c28ee1a5e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=0b2717f97d37a08b8a4829a0ca0e34db-json": "6000d877759c3f958dc6cbde125c61cf",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=2c4764e576ded8fbf6bfbe2b1fe9d2f3-json": "1a9453e67a593eafc3dd5a54a165e829",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=45f97bd9b4f600f19282ff31f26ca708-json": "dd4fc211f0a23979f9a341d3aa8c9e05",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=69234a89b600acc4877e989c58ba929d-json": "38c7b5773a565253d1887a20312b4bb6",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=9ab2aec2b455c7b0455ccfe8ef9c572b-json": "2c422064cd4b62882a76a96cc7250d5c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=91f549dc233546559b95fba7387e75fa-json": "7382c2712e806b2b3d08660ac68f16ea",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=0914b5d937a671a035364ecdde3b6a70-json": "84c442cd43d464e6199ecd5ab6728c70",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=158b9cffaa1dedb8a89eae45d35f4a1c-json": "b6c944d712210c5d35eb67b07f1d5062",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=ffa8af4d606fae1582c544986203b119-json": "4a85d5fbe6dd947828f564b8a32a6c5f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=b88d6fee3be9608877943423eda45aa2-json": "26c7a7d93366f75c07f12b5779b4d9d4",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=df1e5bdc50e2d47d6085ee217f43e462-json": "b6bb5bea5c83c42ef47324ccf02b3300",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a3b900c68c9e6bbb69240380df69a067-json": "05475ea7c06e8429d8d31d6b9ec5a22c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=6286a4ae420886089166c87277f2eb44-json": "62c473d914e812cda08211f9be538b06",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=771b121af92a184c1a801655f6356fb8-json": "63a8c750757ceb0bf491ce137f64b09d",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=8c1a3db4f647b2b3ee266fd508050830-json": "1878ef2d465411830f15a369d0c2634f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=ce60bef13630b29828f9a2376d52a6d4-json": "d5eef8fe9ecd95fae61641d75536513e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f1aaed3feb6cad538eefeb19be45ca8e-json": "21b4a640ef12e2bc5841943a7608551d",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=33b04d3a066dd6a3b722df3348a63c12-json": "bc76888815ec391b48a90595c38b65cd",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=cb00ba535d5d08aeda58e29bee101ca2-json": "4ed20fd8c59bb19d6b84ef546c977ff0",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f86d6a2d82868f91f9d425a6ebe1dbea-json": "4fb81ff9f660e84689ff7e304ad7db07",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=b8ed56c72b0569b60e8b76f87c2896ce-json": "137c1ffa8aeab056cbfd535bd0ed3505",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=0a1eaa585ccfd6db0a3372bfc2125599-json": "c80109c0044d3a7a57477600f59abbb6",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f7b53860352930628acfd71b4c502dfe-json": "599a9ba0714001d4e319bbe967a2ea75",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=44d2d9d2665dd6ac73ef122b25b54c36-json": "283e37bb0b475e6dab29273912d59808",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=276a018a957a7127ed9ae57cdae7b981-json": "e439834cb6e62919cd64e9ee7d5c12b1",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=1e848a7319e3d2092841f777d5103e07-json": "46c89a77e380e7e7e0dac5ea38a3fd3b",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=4c66fbca30b16f6b5d31c7918beb8a6e-json": "86192283996ab4ea972a7d77fdc22d45",
"build/ios/XCBuildData/PIFCache/workspace/WORKSPACE@v11_hash=(null)_subobjects=d6f3c71405afc5127afda8960138c593-json": "5f0822fde4e72c6ccbdf96f0a7653004",
"build/ios/XCBuildData/PIFCache/project/PROJECT@v11_mod=1724729908.4003663_hash=bfdfe7dc352907fc980b868725387e98plugins=1OJSG6M1FOV3XYQCBH7Z29RZ0FPR9XDE1-json": "3fbe0941616cabbdcb7a305eff008b34",
".git/ORIG_HEAD": "614e43304f00feccbd1394eac8caaf52",
".git/config": "2c8a1bbedcb46931e83729599c41766b",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/61/7886428aab93b8b9a5c428f0cdcedbdaa127cc": "b8b181d7b26e70eb9ec183eab88bcc0e",
".git/objects/0d/89a452fa2abba2a66e354ef2acfaed0e8c9a5a": "e6b148b2a4e6d179d101077dc2b7ba0e",
".git/objects/0c/7d84515b5cde3cba694ca179e85a1247fe3326": "e7e6e2c0b4866313d73e09341fa75d93",
".git/objects/0c/0d44ffefefe2a8f2d12427f731fe508f5ff55c": "ac1b6f14692ac2284f41411c3afe0f54",
".git/objects/0c/97dc864fb0b1fadca630955c7a455162ab549a": "3d260ab10f3a41874c631010931d22c5",
".git/objects/0c/b43aa2f738c594aa3bffb54a7b5eb0f370afdb": "3990c029e21eea264a56ffd6fa22befb",
".git/objects/66/6746d52cc013513bbac544f839136ec1bd2332": "4a89115cae4d69608dfc60e3ac258d3e",
".git/objects/66/5f87f8aad57002d5c8e9de3d902cffeea556bf": "3a1ea1784cb1fe96793794eafc164b3e",
".git/objects/3e/7d6bf1b018ff9b5efb53857e611bf1bf8fb95c": "e402dadf172ed304409b13334ebca2f9",
".git/objects/50/109f759c51822677ebef9147ce3fea45b2ed8a": "cba8c4f40a027607c27e5db43cc36f78",
".git/objects/3b/0e429ba0015c3ebdafcf92f0eff39841547092": "15322189190e09e77c2eea32e68a5398",
".git/objects/3b/b7dbac4b075eefb07b5d3190b291435b038124": "6a334f2b086c96f146cd9db8bf19382c",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/6f/cba9cc63b016a74e9e83f959c12c64b3c741b9": "be66c44753cd08e462e681412e087d3e",
".git/objects/03/5ea7decc3993639f61e1dffbc7da53ebba5519": "3207c48b4558d2d7baa1027d8c37be16",
".git/objects/9e/38cf7485e62c07cc27350a703c0191d668be55": "7374f435a8c79da42ee6173b91a818ce",
".git/objects/04/fe90572c1f279ba83b064a07ce9d377cccbcb4": "7f88bccafbd40bc6438bd410b798a536",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/e93496ffe334933cc469e68d996b0a11f2154e": "b3c0955fa4d6c924ad8e468cd3fd9599",
".git/objects/69/f9e753ae1e6495e81966b0c9711542ed01a2bd": "6db6256fe47bb1a228dfdc2ae5dd8d3f",
".git/objects/56/ddf0f4da0566a7872569cd1c7b46c264197aba": "1064e9a7da670851a3415768d586a4c2",
".git/objects/56/ed69df691056d5fbb2bef7393f74c447d49ff6": "91ca5214b6ec36777fc1710c1702a620",
".git/objects/3d/0cc107853d777f91220bfb57e90755ce6993c0": "98a21ad9c0020cd750836c330ef7a9ac",
".git/objects/67/ee00ee523183c959bbfcf10cbd5009f23d1cc3": "8247226b0cc007fbf6dd9859e168a776",
".git/objects/0b/dc58dc9db55f753671b856b4a3a380fc05866c": "11097fcd286a93ffeab070b7704a716c",
".git/objects/93/f6f9ff7065461a2463e7633f163e2fd4cab27b": "154958593eadd9946c622ad37a2bb898",
".git/objects/93/01e2042a441edfd45e0452d1e79767d52e725a": "abe3f764b1701390905da78d6b83c2c2",
".git/objects/0e/e24ab5f8934233a2a4705589202cbadd63e6f7": "0d8ea3152427b31df53dfd67590e7f3c",
".git/objects/5a/713bf49951fda4943e14c9a94ff19d10356194": "83666233e9a353c24cd6ff7538f5ddf7",
".git/objects/5a/7f352ae98a06c414986008e59d12a9ad2855bb": "1c166de881d0e0bbfb174fed48684e66",
".git/objects/5a/6c6df3c7071476705a88d755f10da1583fcbe4": "06fed62a36c1f877691c2d9f26c2fab7",
".git/objects/33/cf8a5095a57fa048ea2a8a05761dcad286162f": "95129baefaecd1cb991e67a93f81008a",
".git/objects/9c/d5110fd7d11017181da303f127fe2142f63b94": "502d08398605df1d9df517e1d5830f70",
".git/objects/02/9b2540361f1bcc903695ef168e1a64123fb6d7": "798da1c0b50b645e1302d39b0fb56f38",
".git/objects/02/c2f5cfd4ba2904a9c325862b61c28a62063266": "85a7d2ae0fd78905f5e09f4945896092",
".git/objects/a3/a11696a916b9907f018ebd3f36225a7e6dcec1": "0c473c321b3416842f6650588ab617f9",
".git/objects/b5/fd4b4f7cb675aece7206b5a4193bb873a8770f": "29962dc17beaca0e4ba3e6ba54f7dd80",
".git/objects/b2/fa872ab8b9f262c6d04ae3d3888bb096c34356": "f828b59f00368e2498612bd861b4afb0",
".git/objects/ac/f27bfeceaa0db275de0e814028af0783838fd8": "72203856b9fa4ae707cde19192bd688c",
".git/objects/ad/fff1f2e912834011de42d5e08e7f77f1d08d84": "10b1e37b22f307650f2dbd059015a1d3",
".git/objects/bb/4e6eb91cc34ec59190857b82c9f5899ee5aeeb": "dfd2ad597fbbd94afcfd1bf2bd23a12b",
".git/objects/d7/d5b753b5c5793b833dda5dfb842a2aa1c3533f": "786cee0ca6e0cb4420a41b3504269bda",
".git/objects/df/f99669879ca51ee0804b820f3332fbe5620f6f": "3a65ef2c2c1cd2d4b1fa762b40a230d3",
".git/objects/da/3da5258949c0ee4f43b8da194c8594a71b44e8": "bc1c1fd75d2d08e331aed33e48f5eba1",
".git/objects/b4/34edd041e285c58baba7cdc0f552abb2341dec": "d399e4e704283d368117a6c3ee79f66a",
".git/objects/b4/63ab67c18316f99751ab15ade368c73e6b9ce6": "b3b7b5795b4595a20fc5bce256f1e8c5",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/4eb917d450688c3a89f69b42d7e88eb8ad3bd3": "61fcd4a075ce6fbb58bd7f38b002e9f4",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/b34686ded16c3a6b20eea8add331b49607b90a": "c8ec4d9992594a3339c4c714b42ef8e0",
".git/objects/d1/b491b8aea1eb16cb485d83be5219d5f4ab0ca5": "058313d90d376bbdc88626b66d108db2",
".git/objects/d1/322729b1af3ae35f70ad1808e248db17fdf133": "9de8fb808f2ec773d3ab1f1f2340dd6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8f23a98dec6f950efa780c66ce95ccd7936f0c": "ae85880de6e444189f43a7c5d9aeca0c",
".git/objects/bc/9c6f979243a471134b98926ce08c5c8d559af7": "d6d0dabbb9ccb5999cada1e98074ec65",
".git/objects/ae/8d6ee5e04949109acf2f74c62cc6aaa8a91ea9": "b36e854e4d93a27ed5f08395a3a588b3",
".git/objects/ae/25103ac7c542b20d18679c0a5990940ce166a3": "008294b5d62d471c352ff7418d81e85c",
".git/objects/ab/2e6816407db9aae569c4daac543c5ca4bc8338": "8f081b15979a35c7093f553a9528bc66",
".git/objects/ab/10dd6c16622eda35eabc1c70c68db81cb57661": "4fa33d066819cbe0001f019268aa0ded",
".git/objects/e5/cf56d9b0441fd8652948e8102fce38a825e7e2": "6bf5561d6ac66547d50c674123b83dae",
".git/objects/e2/4e119af1934db67bf79fa7bf31f2a12199ea71": "d56c4d0bf6d08cb3ef6a79797b12cca7",
".git/objects/e2/d4c41cbed936cfd6311a11210475f7e773a3e2": "5676f720c98cd7042482327b21ee9dc3",
".git/objects/f4/4341d2ebd889eeac31c1d10b4e6ce9c091b5e5": "1e828137760d53d05758d589129ac54a",
".git/objects/f3/9ca64d075c9e8d5354637803ced37655f420f2": "a65a910954b2057d6df0ea0dfc2d1193",
".git/objects/f3/51b7b9b777557b8a7f6f45b6b860c318534c09": "7a9752121d8283ff05466555abe4d2e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/bcb5cb7d153cfe308bcf8d5f24187726e62861": "e9d3f68dc6da67a93eb086308151039c",
".git/objects/fc/d6c49af79614bdbde31a50f521618faf23accb": "8e94cb03e28ba825bc36831aedd53280",
".git/objects/fc/5e7245fff5ca3b2ca863789e25c39007c510f6": "14ba63c7b043e19e16f6b94d3679782d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2a694d63897971d5dbb631991f1225fad47cce": "7b69e98f2e09b1f8edc43e28ce0b0d11",
".git/objects/f5/e2bb515bb9081f00abbbcef4502ba78bed90f7": "8d304e80106229bc605dac510a13e9aa",
".git/objects/f5/ce5f66c5298afc27db9afc19cb14f9baeaa565": "e5d26a8c681b9269f97be782b2f84fee",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e4/119ca316f4d1e1606bd2328e468ec1d6adaffb": "dff5f6d589fe5a40997e369b1451c098",
".git/objects/fe/f57cd39df5852ecb0c1bfcf7fdcde4bbf92c76": "d7ec1a71eb80ef130805d71008d431b1",
".git/objects/20/e40799a4c72e683d2c1ea75e869c9c76287868": "eb45678550d7eb23863f8e9fc195ff59",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/a892b52f1b2bd8b5b00815b2c10ddeea2c4aa9": "39f1d2bd5d1f7e46dc1efa8228cb9623",
".git/objects/27/502e9179b4ada15b03c25857b09a02f335d8d5": "4664674b558cbd979c86a360edbc38ee",
".git/objects/11/089b81b7ebe154c7c898a6936dc1071151efbf": "8addea8aeb8d75eddf3be741d2ed4a99",
".git/objects/7d/8fde8b8ef0c3c049ec01b47763b9149673a1b7": "51bff7cd87873b7a27d0ac9bffea1259",
".git/objects/7d/9cd95456900898bee695cfa90e2bccf9ef08e2": "3b375672c5130464c5a89b3bd0f89751",
".git/objects/7c/3cdf1cf4b2f05bdae3e8d0e78f3117a5355405": "10ff231a073410f897bc89c9c448e045",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/c9949e84b239abfa206adeaecf20e78009af60": "c2bab7b47e80cfbffc5cb37527846e9b",
".git/objects/16/8fd06f904e03cd15c2691224696611960be025": "2270df4e3b588997bc9e2e0bb878db48",
".git/objects/89/07ba840b101097a6c4055aa41c0a1dd29f7089": "00bef97c6b73bf49de369a03e1010556",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/45/bd1ad82f559d83da6a0373e14134e823fc7889": "286c50480b395002e564dde381f9e154",
".git/objects/45/6dad3df04eea0c9c8a97e3d35b3971cb0cae45": "c8add7637561acc655a4a2e3ed672aba",
".git/objects/1f/464ba52c270138ba2bbba6ebf0f80ccf9e86c1": "46cf8ec27a5605cb079dc78b30239884",
".git/objects/1f/18b9348713b04046f4e84c407738197fdb523e": "4e32a964e8ddec81503c6e8c7d077ad5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/04119210d999a3ac9ea665e0f5007019b33de6": "865297158fd9857823feed30c5283111",
".git/objects/80/aeb5f4d4ce4200d79691e8fd71a7392438d86f": "c656279ff11623dfdbe8996dbad79284",
".git/objects/1a/d371ce1718a79e1ed1017d987a702f48e8318d": "0021e75c46dbecdd394f388659c2d9a0",
".git/objects/1a/e722da14966e0a0ee9917a7b6c9683e3c56ff4": "8cc47c6f5106d12e4aff877c7cb53a59",
".git/objects/1a/47d234f08d24a2e1868eb6261d4f7f0633f34e": "c11be42306a6a9ab4d117e6c50a07f8f",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/28/b42c6037df9077fab96ad3b2d0d3abb2f36696": "3cc831afbd63831cfc04ae59fbb9b6d1",
".git/objects/17/690a75907d892376b28f600692bc62f3acddb2": "c4d2305d2301f2e83b13751e58563178",
".git/objects/7b/25d6bdbc7cdaf30fa1c7ea7ca001428678bef8": "d587df3ca029af4401a46cea040cf06b",
".git/objects/8f/da7dc6328b5af159727b1db99e03effe8baac8": "affb889bb61a06f8311f588ee21c7106",
".git/objects/8f/d28a69fb6ec3692945e59ffca9972c690f5f65": "65b41391900dbfb6696b861853759570",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/e7b40cf879490f51774115b8aa81f8e1417e48": "66b5b842a0a14b5b0172f35268e050f0",
".git/objects/10/b5338285369210442a2eeef3e44f3c75d36612": "108566b750b398fdafb39bcd510b79e3",
".git/objects/26/18366bc12256b72cdd311028011b1a72221986": "8c15c8ae494de7d1929150765fa47577",
".git/objects/75/bc84cebf12d1b681de699a69787335976d070a": "cb8df95faca8583171e584a8c1a68d18",
".git/objects/75/1eb422e17543bc2a3bbeb4dd75706fe62fbdad": "44e2384d5cbf869724ddbb1be90abd75",
".git/objects/81/1b9d6b0cf601b8711a27560365e49d29f8025a": "11ac49332525d42945c4226d6afa24b8",
".git/objects/81/b9bd3d69ceaa250e2887eee31262133a9e98a5": "9ffbe5e4ad98afea73039c7baabf67d7",
".git/objects/2a/3f97b327b3f4d2d8a460eb398f579b87a91e12": "b9dec1644e40f9371437305add7e4280",
".git/objects/2f/9de3ab308cf78ef03a841153f3bfa72b21dca5": "bfefe5a07c1ee19685ea7192ec13d816",
".git/objects/2f/5959315998ddec1c18296f6d1fdad76e20781d": "94cbf6bc8b35f7140070e493b8fd4416",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/c937b3b0265e6814748a5442e461d7d9d9b444": "69d5c62d599f93f8bb59b55e59c7bdea",
".git/objects/9f/d2a5c9519989dec1b41221f37fefc0689e7c78": "a6ca5db26b90b32859c21e72a0ad5096",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/a73f0b43bc50a19b60e700b4a5d9674110d251": "f90f8a0efa90d3dcb88053d1f4e7e54d",
".git/objects/6e/a7116512516e2f71b4c3121fbf6c3f2698ef62": "7a0817f5db6950eccca893bf688b5cf8",
".git/objects/9a/05befb0fb6e05dfc53487b01c62c89b7fada29": "8b2a743887a86ddf7a4f2e980e59728e",
".git/objects/9a/fd561e1c48931a7a92e6f80e7b702eb1ff8ec1": "f966145342f65244b9c56bca54af1570",
".git/objects/36/8cf17a732ddc4ac08ec6c1fba5dbc8901e405e": "2eb3af24bb28cf15e9627297d1f1b154",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/67a5e18d4863a3cc73376c72690c76f52ac708": "88733799ec80ae75e81a49281d95401a",
".git/objects/31/54e6cd043be92bfb059b31bdd2b7929eaf6185": "07345a360f81c940d2ebe86be1694889",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/f338c7f5a1f62d2af0e27fc624d44a57b96df9": "e74976c3caeaa1abe3d64dcf56a4aed7",
".git/objects/30/5aed2eeb0013e52516805ab740c16711a34728": "47d69da72f9e2fc2576a6b602119e652",
".git/objects/30/51bd821714dd2f32cca388e72ff901b4028df2": "defed46b46c619e65d55768420410ca5",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/6d/3f27f67e076055546e21d80e601b642137ca31": "8dd2f4007dd51765e4a05735bd936275",
".git/objects/01/54484b4f657ee95a12b037faf2d18b6f3e9c85": "d2aef545de556b4ac55357197ec20d99",
".git/objects/06/c7ec95e2a8bf63d2f64c6bc901793403cb9103": "b41649921617d7c797f169d2b24ef4a3",
".git/objects/6c/fadb8389aaff9733c275b57170ff1da826b708": "965b8aae89d5514a12a237f74d9cc515",
".git/objects/6c/b7a58953bd017bd9b7d7a6bd4ca4171d963f1c": "01a364c35f7db9b8201cbd3a39339529",
".git/objects/6c/371ebe60938a5a2eb352b5596eedc5d55e5a2a": "9a847af16d976c1045088e0c0ace3538",
".git/objects/52/776738c91b3c80e05a786a8399e5d8ae35344c": "58940231ad78e5f3aef5fd7c1a96403e",
".git/objects/0f/cc7bc427aa7259a96d4675a86cf35e3625d1dc": "606c842e313e45bb00cb92fe08e06826",
".git/objects/64/c0bc68d3c0444dcb71f461202bacc7cc58db1b": "c7d2b404a28d09394b2991c53c042211",
".git/objects/90/0e1b832b6f7959cb713fddef6e28d91ece5fef": "895f9c816f78f5e36096c71d061b616e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/c2be9751fd9fb33c9c3e818e55e4e0f4d41ec1": "a62632233c9cd6404e1a99095d9e3d06",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d3/d29240b764a08e2f3d99e0506e72359b939daf": "6c0bb00d664c4f37af8431544a60af6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/78c0234cec231fdfa2696a961ebb256ba4aeda": "2c3c9d223deee36cf113a21699d6df6e",
".git/objects/d4/6dc238993b38f4af6410239325e5c127dd5d0e": "a0c4cdb12bc59c31f4b9ebf9dbd9b169",
".git/objects/d4/7776701443b5df81035322e9dbe7068b3155ae": "f8b6480750d2ca23899546776c69f784",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/ba/c045d64813b056b991b7f8c0f36d57599aad05": "4f12dce070320abb4fc61e725d7104df",
".git/objects/ba/3e23f588c77fe0da52834c9cb615c94e45773a": "206a95a04cd388f0310d2ddd004de73c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/2377878cc1c0f13410bb6857c94b1c90fe88c1": "e4511ae7af63d51f91ec923b1d10134c",
".git/objects/b8/28a9603ed3d701614cce860a95822fac74db14": "c91f44fa8d47a144732606203f60c2bf",
".git/objects/b1/c24614d428d5e9d7eb8f529bffeef37a9080fe": "893677cebdfae9c82b850f8c7f021ac2",
".git/objects/b1/f3d24e97782ee9e7b1e866e118f601a50f51e5": "16d5d8ceeea6af4da490fd7ebba3d84c",
".git/objects/dd/7b59bfff3ad3e7b94684910e5caeae5361fb14": "60cc46c20436a0c075ea6f96363770eb",
".git/objects/dd/ade7eb4bc760befa915cdf774351399cbae437": "59392fd99bad15927877bc80c164fd1c",
".git/objects/dc/b83f7cce6228f8b6dc18b85deac6699a6671b4": "b765ce33fbd5b166eb5a2bf0902c87ad",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d2/daa9e571c5df2656516b0982c68484d80badfc": "d47da7a9e9e0bf4ae6e58e6d628a4cec",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b22089fcb5c1e6485a1659121257dc72e84207": "d5b3fe423e775fcc4f2bd47e2bb55ce3",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/a8/4b8ad12eded38e840b89fb4fb943bd83446dad": "f840cd2e22253a3d06f1f429f3f83825",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1d8dc020a8485027bf1ef8465939f6f1ecb8ae": "cccc2270cb308925f1f0ea7b4c7fc3b4",
".git/objects/ef/f6202db89107cee750b2e363d1bdc60a8668ad": "db8b417fc7ae82f14f57cb55b0508ec8",
".git/objects/c4/e6ffc91f3fdd66b25b6124e4564077d28711c3": "cd0800c225d220947da31895def2b887",
".git/objects/ea/32d484f69bbde085d5962fa70a634a4cfdb229": "bbdd51a9f3df7c7f85d3b1af9abaa1de",
".git/objects/e1/842a02cf17947b7a82bca5a283a1ce8f817ae2": "2b753afe8d6a836f6a279d29095ed89e",
".git/objects/e1/c7eb62bd1ff58d3a568f5bedd94fcb0006dac8": "6d03aa1c4afc73efb350b0f510c9216b",
".git/objects/cd/c8641b879c5aa27752d8cb3b7dc008609ccae9": "afaa33d75eb44830b28abfd84a478470",
".git/objects/cc/503229f81403f71672287617689c9f4a33da31": "bfecfc6df76b3bf6b400952ec17903b8",
".git/objects/f9/9306e6ffd09246dedb9a420d369348ca016662": "746b2bd97dea5019bfa7888fad78c09b",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/f0/c6045da545d51855e58dd2d04e6f6d0829f248": "a493462e249437306edd8c7230dab66c",
".git/objects/f0/e1bdf565696f3fdfdcc025652f8ddd6fd33230": "5f10f58f62174077e78795f74f5fe1e5",
".git/objects/f7/bc46602490d61ccb4e42c0b98fd003063d691f": "f3f2b7191aefda493e3e2b9f4b2f5eb4",
".git/objects/f7/d8c242a7425f55bb4cd29db7fe98807b3d1ad8": "5b57ef54bf1d12076e4c2c4d28bc234a",
".git/objects/e8/7e7cc807638c171f91659d337486a59f6cc12f": "23f95b72f3755c55e7f0d48a1e325438",
".git/objects/fa/106279adb3004a7662c9eccf9a67103e2378eb": "e002e6a3cdf7cf3e7cc5cdcb7e214470",
".git/objects/fa/fb9412093d6ff7ce591f3bbcdc962ed26332d7": "3096ffd21c57737bd4014c09ed70f559",
".git/objects/fa/fa3da93d011a49f149c8658b3b5336f401a67f": "2cc007de4633b967e724f8141d0f5fa3",
".git/objects/f1/f0a2cd1b838149a3aeb7570e87f79f9c877d4b": "f8c1a3321df6b390785daf1053b7db68",
".git/objects/e7/a3b5b78a476f5b0c6449d90b650c747cacf90b": "b5b0422531569f6442080bbdc7f1d817",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/e7/20aba35963336594ea93ff0a50d54839865535": "8f007e34d0dbca02b916c2cfd775a6e4",
".git/objects/e7/795ce8867472f3872f2d365b657540b02c8e23": "98f0c4a301d8ded1af8f642bac8fec25",
".git/objects/e7/ebaa7f5ed2d73c218eef71d74bcc5019df89ce": "9e07c0cc69d58895f90b768fd3bbe094",
".git/objects/cb/0d065cd0e7531bee3efcbd6c0a03d84994ce58": "fd25b5f37fd4cf56fa1a07ea69163290",
".git/objects/cb/5dd6c307e1be362af84d1c43b55475cf6c6734": "e6d9182082296757e8d2ad7b757c6d46",
".git/objects/ce/0d058aeca2b556b13a39760f3128ca2f79d69e": "f3cf683a7a746b72d8bd1846d9d49c74",
".git/objects/46/2128a1faa5ff17c35384ce7512ca6f1db2b222": "14cf4591df108f9ff348344b211e2515",
".git/objects/83/b65582f933a13ad294d043e97f859589dcf454": "76095f367358ac3197b7f96c2b2a884e",
".git/objects/1b/cffbe5cc0f97f2c2153051c31f215bac0c4ac8": "80787301b16c12ba3c49dae13d9cea2f",
".git/objects/1b/efbbdf6f1b09248f2e50e2b4990bba4085b3ce": "2fa40ed6b8c48a3575e65047aa688a93",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/48/873184e99089dd6fdc341e04d22c10c2dece99": "ebf10b33d4bf7119406cfd2afec81594",
".git/objects/48/a9571eb7136d24144081cb492933f6f2842e2e": "80f8c8725bd2fa7bef5780aa5d45396e",
".git/objects/70/93b696261a46d5f3cc5bebfe0ea22396a58d2d": "52423188297b1bf5b33670d8270825f5",
".git/objects/1e/77a6ea983cca4d43483848ca610a132ce69064": "b9d3d6fc8fa822b2e33d45b27045979d",
".git/objects/1e/a04e95d429c304c35a8e8a0cb5927ae769c4b4": "bb73505fa9225f872964fbbd77ed50db",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/9730259b08280cc22423bb5a05ffa1c52185b5": "5724f0925dabf449501668dab27f36c9",
".git/objects/24/657bca80148f6ad5c58fe3f83a7153ba8e35f7": "86a673cca87e2559cec5b373befeba7d",
".git/objects/24/14ed753cb2ecb6c28034e215b7b35324935d62": "1dd50e370d5dd2bb0f4b9667ee92820e",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/d15633c5b29192ea8af03ff231f9b248554f60": "9157918627f8fea0ae3fa5c4265b7ae4",
".git/objects/15/3447de0c2c5d60305fcfcdbd957f127b9e0d54": "cb9f25c3cfe2a63b9da8f48c1689f372",
".git/objects/12/9ce3aa278a9d5789d6d08495efa23d0a75060c": "5a602a5e4f07fa7fb65bba1cb52a2e82",
".git/objects/12/63d6915418326f53425ee9c59de667fcbdc04c": "a56499f0fa7a5d3cc82a37ec0309d938",
".git/objects/12/d5bcd9d24ce77d3f11968df9391b1de83601cd": "69af35d380a3324a04e0b3e3c0a54f27",
".git/objects/12/1f9d6aa35f8f8e188660643217667313f9100f": "23a76bac1699531c17cce6c7f4894e40",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/92ec05876c73ecf2b75e726f24087272a5537a": "5d2ee3e61626512cf0470ac865e94667",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/76/b7c67e501cfbe7dc8e54e60fe8b5c41f05447b": "456dd52e4a6131c0444fa2d5af09b79a",
".git/objects/76/b9f05e311118676c3876fe7fa3daf976aee8fa": "0190920b612731c386ba5e3c1c0e983d",
".git/objects/1c/136977924433e953062961686900905933ed8e": "513379a1bda3c576cafa2378d450ab52",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/9aa72b1c282d59114efd74e8f8f619eb34087e": "bbb3b6b16adae4cf823bfa35e634294a",
".git/objects/82/22aa480bb164968cb8f6a1b8eaa8b860a68840": "a1a497e4314638dd86cd1a183525ae71",
".git/objects/40/acd6cdc5d7acd04191043720f5502312b1cc07": "dc399fc7c091260aa04b656b854bb510",
".git/objects/2e/0d34c1a280e9f37d3afbdde45cb4315bd3cc1e": "3f05220f9a3cd290912ad2057cbf6890",
".git/objects/47/bd95223e77da71f09dcd91a415ccc1058fce55": "7f38723ff41f92ebfbde1e0f310dfe30",
".git/objects/78/444dc9316b7bf0c0bd84d7ee1036587e0bd8ce": "258e6d70b9091e3bbc5b38a96b8921c6",
".git/objects/8b/f17814246e42a471236e6f7cdb5d886d854360": "43774be3a1cacf20bf80485f0f929ef1",
".git/objects/8b/91a40be01cf08779323219a2c1df35d531e137": "c154cd65a727e16c14ddad18ca6ab8f6",
".git/objects/13/5bb4c429cf51dc5ccdb085ef4638a9c97925e0": "835171499a017f894014ec9f493b5596",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7a/9dff1a4d36f85fd222e0d1ed872936aab0f4f9": "fff123fc274a66c40adaa76a74cd3ba1",
".git/objects/14/a61b635e6b9f68c3845b4f0e6185126acc3a8a": "861cfe95d5a025582ca01f107a2f9166",
".git/objects/8e/173f0b6bc949961e523073b0a28c5af90bf47b": "0e7a5873384bf74570990641400feb02",
".git/objects/8e/5bfb8433a2f909a29fbe6d17318e0da8910305": "03f02fd61b27b03b297765a6c8a54df1",
".git/objects/22/d8faf633d5ad3a88fe0566d78f45cf24167240": "38f4be061d51a1e48f15061adcff162b",
".git/objects/25/f8ed3f5152143d13ee090fe777a68033301bf2": "7e29bb8420043abeabdd1c9fb12ef3f1",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1357e980a6b46900697e046b90d5b86",
".git/logs/refs/heads/master": "f1357e980a6b46900697e046b90d5b86",
".git/logs/refs/remotes/origin/master": "55b52c1c2857d1374fc9da2ead2326f9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "614e43304f00feccbd1394eac8caaf52",
".git/refs/remotes/origin/master": "614e43304f00feccbd1394eac8caaf52",
".git/index": "06ee685dbe465eedcb60c8848596c75f",
".git/COMMIT_EDITMSG": "671340e3a75339f4fe04904b944224b6",
".git/FETCH_HEAD": "7964af2f29391bb034046dc78fec8b46",
"assets/AssetManifest.json": "7fef1348ef877e46bfe1ecaf1e90988c",
"assets/NOTICES": "2ffb9ee138e1de575e53b399550a887d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "7fbdac343748ecb747ec5d3af4b9f1bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f67d178bcfa064331141bfe3fd5806ae",
"assets/fonts/MaterialIcons-Regular.otf": "51b4b276f57ea1d87540b797feee6914",
"assets/assets/event-logo.jpeg": "a0dc0e8878232ba0ad5ef39460474508",
"assets/assets/recreation.png": "b316585af817f6b02f160e958acb4fa6",
"assets/assets/banner.png": "fd281816d8378d7e5910d8935085ef2f",
"assets/assets/gym.png": "0734a3c7b3a5a3ce012200547204f6bf",
"assets/assets/background.jpg": "39179683423811d2ef86ce98d0c001c0",
"assets/assets/camps.jpg": "e3025b5378f33002df46b46f4a593925",
"assets/assets/arts.png": "14f3fdc8f8b3684430046b7365a15441",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
