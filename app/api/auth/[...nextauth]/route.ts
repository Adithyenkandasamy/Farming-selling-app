import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/db/connect";
import { User } from "@/lib/db/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectDB();
          const existingUser = await User.findOne({ email: user.email });
          
          if (!existingUser) {
            await User.create({
              email: user.email,
              name: user.name,
              image: user.image,
              role: "CUSTOMER", // Default role
              emailVerified: new Date(),
            });
          }
          return true;
        } catch (error) {
          console.error("Sign in error:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      try {
        await connectDB();
        const user = await User.findOne({ email: session.user.email });
        if (user) {
          session.user.role = user.role;
          session.user.id = user._id.toString();
        }
        return session;
      } catch (error) {
        console.error("Session error:", error);
        return session;
      }
    },
  },
});

export { handler as GET, handler as POST };