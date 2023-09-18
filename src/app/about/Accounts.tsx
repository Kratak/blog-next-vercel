import {sql} from "@vercel/postgres";

async function getAccounts() {
        const { rows } = await sql`SELECT * FROM accounts;`;
        return rows

}


export default async function AccountsList() {
        const accounts = await getAccounts()
        console.log(accounts)

        return (
            <>
                    {accounts.map((ticket) => (
                        <div key={ticket.id} className="card my-5">
                                        <h3>Name: {ticket.username}</h3>
                        </div>
                    ))}
                    {accounts.length === 0 && (
                        <p className="text-center">There are no open tickets, yay!</p>
                    )}
            </>
        )
}
