// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/Minting', key: 'Minting', label: 'Minting' },
  { href: '/Series', key: 'Series', label: 'Series' },
  { href: '/MyNFT', key: 'MyNFT ', label: 'MyNFT ' },
  { href: '/transferNFT', key: 'transferNFT', label: 'TransferNFT' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/lendingPage/person-1.png',
  '/lendingPage/person-2.png',
  '/lendingPage/person-3.png',
  '/lendingPage/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: '위조 방지',
    icon: '/lendingPage/tech.svg',
    variant: 'green',
    description:
      'NFT와 블록체인 기술을 통해 여러분들이 갖고 있는 스탬프의 기회비용은 유지 됩니다. 오롯히 여러분들만이 가진 스탬프 NFT로서 유일무이한 가치를 가집니다. ',
  },
  {
    title: '안전하고 편리한 가치',
    icon: '/lendingPage/tech.svg',
    variant: 'green',
    description:
      '여러분들이 가지고 있는 모든 NFT 들은 안전하게 지갑과 블록체인에 저장됩니다. 여러분들은 그저 비밀번호만 잘 알고 있다면 다른 걱정은 할 필요가 없습니다. 비밀번호만 알고 있다면 언제 어디서든지 자신의 NFT들을 확인할 수 있습니다.',
  },
  {
    title: '높은 확장성',
    icon: '/lendingPage/tech.svg',
    variant: 'green',
    description:
      '기본적으로 Polygon NFT로 만들어진 만큼 블록체인 내에서 다양한 네트워크에 접근할 수  많은 Dapp과 연동시킬 수 있습니다. 또한, NFT로서 블록체인이 기록되는 만큼 추후에 다양한 이벤트와도 연계시킬 수 있습니다. 한번 발행된 NFT는 결코 없어지지 않습니다.',
  },
  {
    title: '거래 가능',
    icon: '/lendingPage/tech.svg',
    variant: 'orange',
    description:
      '세계에서 가장 큰 NFT 거래소인 Opensea의 표준에 맞춘 NFT로서 사고 팔 수 있습니다. 유명한 NFT 마켓에서 자신이 갖고 있는 NFT를 팔거나 원하는 NFT를 구매할 수 있습니다. 만약 자신의 NFT가 인천시의 어떤 행사 티켓으로 사용될 수 있다면 그 가치는 훨씬 커질 수 있습니다.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About NFT',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Blockchain at Yonsei', 'GBIC', 'DNFT'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'dNFTwithIncheon@dNFTwithIncheon.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/lendingPage/facebook.svg',
    '/lendingPage/instagram.svg',
    '/lendingPage/twitter.svg',
    '/lendingPage/youtube.svg',
    '/lendingPage/wordpress.svg',
  ],
};

export const IncheonSeriesExample = [
  { label: '전등사', lat: 37.75373760000001, lng: 126.4833964 },
  { label: '광성보', lat: 37.664987, lng: 126.5300939 },
  { label: '동막해수욕장', lat: 37.5925761, lng: 126.4581875 },
  { label: '보문사', lat: 37.68862319999999, lng: 126.3219046 },
];

export const Step = [
  {
    id: 'world-1',
    imgUrl: '/lendingPage/metamaskLogin.png',
    title: '지갑으로 간편 로그인',
  },
  {
    id: 'world-2',
    imgUrl: '/lendingPage/planet-02.png',
    title: '진행중인 시리즈 둘러보기',
  },
  {
    id: 'world-3',
    imgUrl: '/lendingPage/planet-03.png',
    title: '원하는 시리즈 선택 후 스템프 보드 NFT 받기',
  },
  {
    id: 'world-4',
    imgUrl: '/lendingPage/planet-04.png',
    title: '미션 수행하면서 스탬프 NFT 받기',
  },
  {
    id: 'world-5',
    imgUrl: '/lendingPage/planet-05.png',
    title: '준비된 또는 뜻밖의 혜택 받기',
  },
];

export const ExampleSeries = {
  seriesInfo: {
    title: '강화도 맛집 탐방 시리즈~',
    series: 1,
    benefit: '지역문화 상품권 10000원',
    description:
      '강화도에 있는 다양한 맛집과 문하재를 탐방하면서 스탬프를 찍어오는 이벤트',
    useWhere: '인천 가락시작',
    owner: 'GBIC',
    useWhenFrom: 'Thu Oct 26 2023 00:00:00 GMT+0900 (Korean Standard Time)',
    useWhenTo: 'Thu Oct 26 2023 00:00:00 GMT+0900 (Korean Standard Time)',
  },
  '0': {
    name: 'Series 1 Stamp Board',
    image:
      'https://raw.githubusercontent.com/LimeTasteLife/2023-GBIC-Hackerthon/49b30f091baa6c0fdae2bfa6d218a81a3158be7d/client/web3/metadata/series2incheon.png',
    description: '첫번째 인천 스탬프 NFT 시리즈의 도장판',
    quantity: 10,
    series: 1,
  },
  '1': {
    name: 'Series 1 Stamp 1',
    image:
      'https://raw.githubusercontent.com/LimeTasteLife/2023-GBIC-Hackerthon/49b30f091baa6c0fdae2bfa6d218a81a3158be7d/client/web3/metadata/series2incheon.png',
    description: '첫번째 인천 스탬프 NFT 시리즈의 도장',
    quantity: 10,
    lat: 37.2345,
    lng: 126.5334,
    place: '인천광역시 강화군 보문사',
    series: 1,
  },
  '2': {
    name: 'Series 1 Stamp 2',
    image:
      'https://raw.githubusercontent.com/LimeTasteLife/2023-GBIC-Hackerthon/49b30f091baa6c0fdae2bfa6d218a81a3158be7d/client/web3/metadata/series2incheon.png',
    description: '첫번째 인천 스탬프 NFT 시리즈의 도장',
    quantity: 10,
    lat: 37.2345,
    lng: 126.5334,
    place: '인천광역시 강화군 보문사',
    series: 1,
  },
  '3': {
    name: 'Series 1 Stamp 3',
    image:
      'https://raw.githubusercontent.com/LimeTasteLife/2023-GBIC-Hackerthon/49b30f091baa6c0fdae2bfa6d218a81a3158be7d/client/web3/metadata/series2incheon.png',
    description: '첫번째 인천 스탬프 NFT 시리즈의 도장',
    quantity: 10,
    lat: 37.2345,
    lng: 126.5334,
    place: '인천광역시 강화군 보문사',
    series: 1,
  },
  '4': {
    name: 'Series 1 Stamp 4',
    image:
      'https://raw.githubusercontent.com/LimeTasteLife/2023-GBIC-Hackerthon/49b30f091baa6c0fdae2bfa6d218a81a3158be7d/client/web3/metadata/series2incheon.png',
    description: '첫번째 인천 스탬프 NFT 시리즈의 도장',
    quantity: 10,
    lat: 37.2345,
    lng: 126.5334,
    place: '인천광역시 강화군 보문사',
    series: 1,
  },
};
