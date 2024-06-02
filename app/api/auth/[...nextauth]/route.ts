import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user } : any) {
      console.log('process.env.ADMIN_EMAIL: ', process.env.ADMIN_EMAIL);
      if (user.email === process.env.ADMIN_EMAIL){
        return true
      } else {
        return false
      }
    }
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };