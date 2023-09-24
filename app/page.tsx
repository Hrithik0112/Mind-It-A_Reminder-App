import { UserButton } from "@clerk/nextjs/app-beta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold ">Welcome To Mind It A Reminder App</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
