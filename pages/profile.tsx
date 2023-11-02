import Link from 'next/link';

import styles from '../styles/Home.module.css';
import Profile from "../components/profile";
import useSWR from "swr";
import {useSession} from "next-auth/react";
import Unauthorized from "../components/unauthorized";

export default function ProfileView() {
    const { data: session } = useSession()
  return (
   <>
       {session && (
           <>
               <div className={styles.container}>
                   <h1>Welcome, {session.user.name}</h1>
                   <p>
                       You have successfully logged in via Zitadel. You can now use the
                       application.
                   </p>
                   <Link href="/">
                       <button>Back to Home</button>
                   </Link>
               </div>
           </>
       )}
       {!session && (
         Unauthorized()
       )}
   </>
  );
}
