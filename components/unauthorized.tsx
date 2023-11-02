import {signIn} from "next-auth/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Unauthorized() {
    return (
        <>
            <div className={styles.container}>
                <h1>Unauthorized</h1>
                <p>
                    You are not logged in. Please log in via Zitadel.
                </p>
                <button
                    onClick={() =>
                        signIn('zitadel', {
                            callbackUrl: 'http://localhost:3000/profile',
                        })
                    }
                >
                    Sign in
                </button>
            </div>

        </>
    )
}