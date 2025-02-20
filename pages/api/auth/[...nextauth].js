import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.profile " +
            "https://www.googleapis.com/auth/userinfo.email " +
            "https://www.googleapis.com/auth/drive.file",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Solución 1: Usar convención _ para variables no utilizadas
    async redirect({ url: _url, baseUrl: _baseUrl }) {
      return "https://www.misioninnova.org/p/biblioteca.html";
    },
