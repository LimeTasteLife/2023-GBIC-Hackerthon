import NextAuth, { NextAuthOptions } from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session object
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      token.user = user;

      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      if (user) {
        const profile = await prisma.user.findUnique({
          where: {
            account: token.user.address,
          },
        });

        if (!profile) {
          // If the user doesn't exist, create a new entry
          await prisma.user.create({
            data: {
              account: token.user.address,
            },
          });

          const profile = await prisma.user.findUnique({
            where: {
              account: token.user.address,
            },
          });
          return { ...token, ...user, ...profile };
        }

        return { ...token, ...user, ...profile };
      }
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
