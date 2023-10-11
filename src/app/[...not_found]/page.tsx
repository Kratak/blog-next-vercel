
export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <h1 className={`mb-3 text-4xl font-semibold mb-8`}>Nie znaleziono</h1>
            <div>Treści z podanego linka nie zostały znalezione</div>
            <a href="/">Wróć do strona główna</a>
            <a href="/">Wróć do strona z postami</a>
        </main>
    )
}
