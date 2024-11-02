import { auth } from "@/auth";
import { CheckSessionButton } from "@/components/auth/check-session-button";
import { SignOut } from "@/components/auth/signout-button";
import { SignIn } from "@/components/sign-in";

export default async function DashBoard() {
  console.log("render dashboard");
  const session = await auth();
  return (
    <div>
      <p>DashBoard</p>
      <div>
        {session ? (
          <>
            <p>id: {session.user?.id || "null"}</p>
            <p>email: {session.user?.email || "null"}</p>
            <p>name: {session.user?.name || "null"}</p>
            <p>image: {session.user?.image || "null"}</p>
          </>
        ) : (
          <p>null</p>
        )}
      </div>
      <SignIn />
      <SignOut />
      <CheckSessionButton />
    </div>
  );
}
