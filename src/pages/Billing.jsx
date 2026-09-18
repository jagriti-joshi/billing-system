import { useEffect, useState } from "react";

function Billing() {

  const [balance, setBalance] = useState(500);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const savedBalance =
      localStorage.getItem("tokenBalance");

    const savedTransactions =
      localStorage.getItem("tokenTransactions");

    if (savedBalance !== null) {

      setBalance(Number(savedBalance));

    } else {

      localStorage.setItem(
        "tokenBalance",
        "500"
      );

    }

    if (savedTransactions !== null) {

      setTransactions(
        JSON.parse(savedTransactions)
      );

    }

  }, []);

  const buyTokens = (amount, price) => {

    const newBalance = balance + amount;

    const transaction = {

      id: Date.now(),

      type: "PURCHASE",

      description:
        `${amount} Token Package`,

      amount: amount,

      price: price,

      date:
        new Date().toLocaleDateString(),

    };

    const updatedTransactions = [
      transaction,
      ...transactions,
    ];

    setBalance(newBalance);

    setTransactions(
      updatedTransactions
    );

    localStorage.setItem(
      "tokenBalance",
      newBalance.toString()
    );

    localStorage.setItem(
      "tokenTransactions",
      JSON.stringify(
        updatedTransactions
      )
    );

    alert(
      `${amount} tokens added successfully!`
    );
  };

  return (

    <div>

      {/* Header */}
      <div className="page-header">

        <div>

          <h1>Billing</h1>

          <p>
            Manage your tokens and billing history.
          </p>

        </div>

      </div>

      {/* Balance */}
      <div className="balance-card">

        <div>

          <p>
            Available Tokens
          </p>

          <h2>
            {balance}
          </h2>

          <span>
            tokens available
          </span>

        </div>

        <div className="token-icon">
          ◉
        </div>

      </div>

      {/* Packages */}
      <div className="section-heading">

        <div>

          <h2>
            Buy Tokens
          </h2>

          <p>
            Choose a token package for plagiarism checking.
          </p>

        </div>

      </div>

      <div className="package-grid">

        {/* Starter */}
        <div className="package-card">

          <div className="package-header">
            <h3>Starter</h3>
          </div>

          <h2>500</h2>

          <p className="package-token">
            tokens
          </p>

          <div className="package-price">
            Rs. 100
          </div>

          <p>
            Suitable for small documents.
          </p>

          <button
            className="primary-button full"
            onClick={() =>
              buyTokens(500, 100)
            }
          >
            Buy Now
          </button>

        </div>

        {/* Standard */}
        <div className="package-card featured">

          <div className="popular-label">
            POPULAR
          </div>

          <div className="package-header">
            <h3>Standard</h3>
          </div>

          <h2>1000</h2>

          <p className="package-token">
            tokens
          </p>

          <div className="package-price">
            Rs. 180
          </div>

          <p>
            Suitable for regular users.
          </p>

          <button
            className="primary-button full"
            onClick={() =>
              buyTokens(1000, 180)
            }
          >
            Buy Now
          </button>

        </div>

        {/* Premium */}
        <div className="package-card">

          <div className="package-header">
            <h3>Premium</h3>
          </div>

          <h2>2500</h2>

          <p className="package-token">
            tokens
          </p>

          <div className="package-price">
            Rs. 400
          </div>

          <p>
            Suitable for heavy users.
          </p>

          <button
            className="primary-button full"
            onClick={() =>
              buyTokens(2500, 400)
            }
          >
            Buy Now
          </button>

        </div>

      </div>

      {/* Transactions */}
      <div className="card recent-card">

        <div className="card-header">

          <div>

            <h2>
              Transaction History
            </h2>

            <p>
              Your recent token transactions.
            </p>

          </div>

        </div>

        {transactions.length === 0 ? (

          <div className="empty-state">

            <div>
              ◷
            </div>

            <h3>
              No transactions yet
            </h3>

            <p>
              Your token purchases and usage will appear here.
            </p>

          </div>

        ) : (

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Tokens</th>
              </tr>

            </thead>

            <tbody>

              {transactions.map(
                (transaction) => (

                  <tr
                    key={transaction.id}
                  >

                    <td>
                      {transaction.date}
                    </td>

                    <td>

                      <span
                        className={
                          transaction.type ===
                          "PURCHASE"
                            ? "badge paid"
                            : "badge overdue"
                        }
                      >
                        {transaction.type}
                      </span>

                    </td>

                    <td>
                      {transaction.description}
                    </td>

                    <td
                      className="token-positive"
                    >
                      +
                      {transaction.amount}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default Billing;