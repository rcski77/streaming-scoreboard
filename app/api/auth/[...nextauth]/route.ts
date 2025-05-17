// ----------
// app/api/auth/[...nextauth]/route.ts
// ----------

import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from '@/lib/db'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    })
  ],
  callbacks: {
    async signIn({ user }) {
        return ['rcski77@gmail.com'].includes(user.email ?? '')
    }
  },
  pages: {
    signIn: '/auth/signin', // Optional: custom sign-in page
    error: '/auth/error', // Error code passed in query string as ?error=
  }
})

export { handler as GET, handler as POST }
