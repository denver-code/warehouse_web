import '../styles/globals.css';
import { getServerSession } from "next-auth/next"
import { SessionProvider } from 'next-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
  );
}

export default MyApp;
