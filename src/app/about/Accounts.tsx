// import {sql} from "@vercel/postgres";

async function getAccounts() {
    // const {rows} = await sql`SELECT * FROM accounts;`;
    // Remove query from about page, to further rebuild
    return [{username: 'Dadgrammer', id: 1}]

}


export default async function AccountsList() {
    const accounts = await getAccounts()

    return (
        <>
            {accounts.map((account) => (
                <div key={account.id} className="card my-5">
                    <h3>{account.username}</h3>
                </div>
            ))}
            {accounts.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}
