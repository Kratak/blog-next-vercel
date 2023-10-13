import {QueryResult, sql} from "@vercel/postgres";

interface ArticleResponse {
    is_public: boolean,
    article_id: number,
    custom_url: string,
    article_title: string,
    publish_date: Date,
    article_short_description: string
}

async function getArticlesDescription(): Promise<Array<ArticleResponse>> {
    const {rows}: QueryResult<ArticleResponse> = await sql`
        SELECT is_public, article_id, publish_date, custom_url, article_title, article_short_description 
        FROM articles 
        ORDER BY publish_date DESC;`;
    return rows

}

const ArticlesList = async () => {
    const articles = await getArticlesDescription()
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
    })}
    </div>)
}

export default ArticlesList
