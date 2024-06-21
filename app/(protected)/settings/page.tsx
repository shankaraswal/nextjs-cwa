import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <h1>{JSON.stringify(session)}</h1>;
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant={"shan"}>Sign out</Button>
      </form>
    </>
  );
};
export default SettingsPage;
