import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.cd60ff5752311a49",
      clientSecret: "9ec7224da76be95c3b24b08c9b7e8cca337e07c6",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
