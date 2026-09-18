function Payments() {

  const payments = [
    {
      id: "PAY-001",
      customer: "Ram Sharma",
      invoice: "INV-1001",
      date: "18 Sep 2026",
      amount: "Rs. 12,500",
      method: "eSewa",
      status: "Completed",
    },
    {
      id: "PAY-002",
      customer: "Sita Thapa",
      invoice: "INV-1005",
      date: "17 Sep 2026",
      amount: "Rs. 8,000",
      method: "Bank",
      status: "Completed",
    },
    {
      id: "PAY-003",
      customer: "Aarav Joshi",
      invoice: "INV-1003",
      date: "16 Sep 2026",
      amount: "Rs. 15,200",
      method: "Cash",
      status: "Completed",
    },
  ];

  return (

    <div>

      <div className="page-header">

        <div>

          <h1>Payments</h1>

          <p>
            Track and manage customer payments.
          </p>

        </div>

        <button className="primary-button">
          + Record Payment
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon green">
            Rs
          </div>

          <p className="stat-title">
            Total Payments
          </p>

          <h2>
            Rs. 85,450
          </h2>

        </div>

        <div className="stat-card">

          <div className="stat-icon blue">
            #
          </div>

          <p className="stat-title">
            Transactions
          </p>

          <h2>
            86
          </h2>

        </div>

        <div className="stat-card">

          <div className="stat-icon purple">
            %
          </div>

          <p className="stat-title">
            Success Rate
          </p>

          <h2>
            98.4%
          </h2>

        </div>

      </div>

      <div className="card">

        <table>

          <thead>

            <tr>
              <th>Payment ID</th>
              <th>Customer</th>
              <th>Invoice</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {payments.map(
              (payment) => (

                <tr key={payment.id}>

                  <td>
                    <strong>
                      {payment.id}
                    </strong>
                  </td>

                  <td>
                    {payment.customer}
                  </td>

                  <td>
                    {payment.invoice}
                  </td>

                  <td>
                    {payment.amount}
                  </td>

                  <td>
                    {payment.method}
                  </td>

                  <td>

                    <span className="badge paid">
                      {payment.status}
                    </span>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Payments;