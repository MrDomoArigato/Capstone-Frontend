export default function RecentTransactions({ transactions }) {
    return (
        <>
            <h4 style={{ marginTop: '40px' }}>Recent Transactions</h4>
            <RecentTransactionsList transactions={transactions} />
        </>
    )
}

function RecentTransactionsList({ transactions }) {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {
                        transactions.map((transaction) => { return(
                            <div key={transaction.transactionId}>
                                <RecentTransactionCard transaction={transaction} />
                            </div>
                        )})
                    }
                </div>
            </div>
        </>
    )
}

function RecentTransactionCard({ transaction }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{transaction.Description}</h5>
                    <div>
                        {/* Render transaction */}
                        <div key={transaction.transactionId}>
                            <p>Date: {transaction.Date}</p>
                            <p>Type: {transaction.Type}</p>
                            <p>Amount: {transaction.Amount}</p>
                        </div>
                    </div>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}