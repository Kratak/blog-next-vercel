import ArticlesList from "@/app/articles/Articles";

export default function Articles() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <a href="/">Strona główna</a>
            <h1 className={`mb-3 text-4xl font-semibold mb-8`}>Wszystkie artykuły</h1>
            <ArticlesList/>
        </main>
    )
}
