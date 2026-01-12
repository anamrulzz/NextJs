import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
 
  if (status === "loading") {
    return <div>Loading...</div>;
  }
 
  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Welcome, {session.user.email}!<br></br>
      </p>
      <p>this is a protected page.</p>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
    </div>
  );
}
