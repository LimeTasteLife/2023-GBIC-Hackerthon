// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../auth/[...nextauth]';
// import prisma from '@/helpers/prismadb';

// interface TransactionComponent {
//   userAccount: string;
//   title: string;
//   description: string;
//   category: Number;
//   brand: string;
//   blockchain: Number;
//   useWhere: string;
//   field: Number;
//   quantity: Number;
//   itemWeight: Number;
//   price: Number;
//   useWhenFrom: Date;
//   useWhenTo: Date;
//   minimumPrice: Number;
//   earningRatio: Number;
//   latitude: Number;
//   longitude: Number;
//   imageSrc: Array<string>;
//   choosedCountry: string;
//   detailAddress: string;
// }

// async function addTransaction(
//   userAccount: string,
//   {
//     title,
//     description,
//     category,
//     brand,
//     blockchain,
//     useWhere,
//     field,
//     quantity,
//     itemWeight,
//     price,
//     useWhenFrom,
//     useWhenTo,
//     minimumPrice,
//     earningRatio,
//     latitude,
//     longitude,
//     imageSrc,
//     choosedCountry,
//     detailAddress,
//   }: TransactionComponent
// ) {
//   let setImageSrc: string = '';

//   if (imageSrc) {
//     setImageSrc = imageSrc.join(', ');
//   }

//   console.log('setImageSrc', setImageSrc);

//   try {
//     const res = await prisma.transactions.create({
//       data: {
//         userId: userAccount,
//         title,
//         description,
//         field: Number(field),
//         brand,
//         category: Number(category),
//         blockchain: Number(blockchain),
//         useWhere,
//         quantity: Number(quantity),
//         itemWeight: Number(itemWeight),
//         price: Number(price),
//         useWhenFrom,
//         useWhenTo,
//         minimumPrice: Number(minimumPrice),
//         earningRatio: Number(earningRatio),
//         latitude: Number(latitude),
//         longitude: Number(longitude),
//         imageSrc: setImageSrc,
//         choosedCountry,
//         detailAddress,
//         TransactionCount: {
//           create: {
//             count: 0,
//           },
//         },
//       },
//     });

//     // const transactionCount = await prisma.transactionCount.create({
//     //   date: { transactionId: res.id, count: 0 },
//     // });

//     console.log('res', res);

//     return res;
//   } catch (error) {
//     console.error(error);
//   }
// }

// type Data = {
//   items?: any;
//   message: any;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const session = await getServerSession(req, res, authOptions);
//   const response = req.body;

//   if (session == null) {
//     res.status(200).json({ items: [], message: 'You must be logged in.' });
//     return;
//   }

//   try {
//     const order = await addTransaction(String(session.user?.address), response);
//     res.status(200).json({ items: order, message: 'Success' });
//   } catch (error: any) {
//     res.status(200).json({ message: error.message });
//   }
// }
