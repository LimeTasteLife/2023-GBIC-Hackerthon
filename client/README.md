This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// const tokenURI = 'https://raw.githubusercontent.com/hyunkicho/blockchain101/main/erc1155/metadata/';

### page configuration

1. Landing Page

- 상품 소개 및 현재 어떤 Series가 진행중인지 보여줌

2. mint Page / erc1155 check page (admin만 접근 가능)

- 하나의 series를 생성(스탬프 보드과 스탬프들 NFT)할 수 있는 페이지
  => mint한 erc1155를 확인하고 관리할 수 있는 page로 넘어간다.

3. series info page

- landing page에서 각 series를 클릭하면 해당 serise에 대한 info 와 함께 (kakaomap 적용 예정)

- 이번 series에 참여하겠다는 신청하기 버튼이 있다. 이 버튼을 누르면 자신의 지갑으로 해당 series의 스탬프 보드 NFT가 전달 된다.

=> 해당 유적지, 문화재에 직접 방문하여 어떤 인증절차를 거치면 그 사람의 주소로 nft가 전달된다. 이때 전달하는 건 erc1155 check page에서 가능하다.

transfer 함수가 실행될 때 db에 어떤 주소로 보냈는지 저장한다.

(가능하다면 이때 발생된 event를 모두 database에 저장해 놓는다. 추후 거래에서 발생된 event까지 전부)

4. my page

- 자신이 신청한 series와 그 스탬프 보드, 그리고 받은 스탬프 내역 (어느정도 달성했는지 수치를 그래프로 표현) 등을 토대로 합쳐진 NFT 사진을 보여준다.
- 본인이 스탬프 보드에 스탬프을 얼마나 찍었는지 인증하는 페이지로서 작동된다.
