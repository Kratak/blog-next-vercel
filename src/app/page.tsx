import {sql} from "@vercel/postgres";
import {Suspense} from "react";

async function getArticles() {
    const {rows} = await sql`
        SELECT is_public, publish_date, custom_url, article_title, article_short_description 
        FROM articles 
        ORDER BY publish_date DESC 
        LIMIT 10;`;
    return rows

}

const Articles = async () => {
    const articles = await getArticles()
    if (articles.length === 0) {
        return <div>Brak Artykułów</div>
    }
    return (<div>{articles.map(article => {
        if (!article.is_public) {
            return
        }
        return (
            <a key={article.article_id} href={`/articles/${article.custom_url}`}>
                <div>
                    <h2 className={`mb-3 text-2xl font-semibold`}>{article.article_title}</h2>
                    <div>Opublikowano: {new Date(article.publish_date).toISOString()}</div>
                    <div>Autor: Dadgrammer</div>
                    <br/>
                    <div>{article.article_short_description}</div>
                    <div>___</div>
                    <br/>
                </div>
            </a>

        )
    })}</div>)
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Work in progres
                </p>
            </div>

            <div
                className="text-4xl mb-10 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                {`<Dadgrammer blog />`}
            </div>

            <div>
                <Suspense fallback={<div>Ładowanie postów...</div>}>
                    <Articles/>
                </Suspense>
            </div>

            <div>
                <a href="/articles">Pozostałe posty</a>
            </div>

        </main>
    )
}
