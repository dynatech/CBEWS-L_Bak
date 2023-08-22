import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        session.user.id = '1';
        return session;
    },
    async signIn({ profile }) {
        try {
            // Add logic here to store user login to db if none found
            return true;
        } catch (error) {
            return false;
        }
    }
})

export {  handler as GET, handler as POST}