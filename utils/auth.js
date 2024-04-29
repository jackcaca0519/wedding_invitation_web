import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'password',
      credentials: {
        password: {
          label: '密碼',
          type: 'password',
        },
      },
      async authorize(credentials, _request) {
        if (credentials && credentials.password ==  process.env.NEXTAUTH_PASSWORD) {
          return { id: 'admin' };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
  },
};