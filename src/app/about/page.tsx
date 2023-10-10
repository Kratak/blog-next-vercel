import AccountsList from "@/app/about/Accounts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <a href="/">Strona główna</a>
      <h1 className="text-4xl mb-10">About page</h1>
        <div>Redactors:</div>
        <AccountsList />
    </main>
  )
}
