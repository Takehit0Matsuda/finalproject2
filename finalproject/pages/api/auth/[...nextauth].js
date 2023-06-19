import NextAuth from "next-auth"
import jwt from 'jsonwebtoken';
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
//import EmailProvider from "next-auth/providers/email"

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    secret: process.env.SECRET,
    providers: [
        // OAuth authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // Sign in with passwordless email link
        // EmailProvider({
        // server: process.env.MAIL_SERVER,
        // from: "<no-reply@example.com>",
        // }),
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        session: async ({token, session: session}) => {
            if (session?.user && token?.sub) {
                session.user.id = token.sub;
            }
            return session
        }
    },

    database: process.env.DATABASE_URL,
})