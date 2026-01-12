import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with DB lookup or API call
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password123"
        ) {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: 'Swv35@gg%^#$DbdVd4%#d34%G34%vS2#',
});
