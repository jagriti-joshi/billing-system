function Invoices() {

  const invoices = [
    {
      id: "INV-1001",
      customer: "Ram Sharma",
      date: "18 Sep 2026",
      amount: "Rs. 12,500",
      status: "Paid",
    },
    {
      id: "INV-1002",
      customer: "Sita Thapa",
      date: "17 Sep 2026",
      amount: "Rs. 8,750",
      status: "Pending",
    },
    {
      id: "INV-1003",
      customer: "Aarav Joshi",
      date: "16 Sep 2026",
      amount: "Rs. 15,200",
      status: "Paid",
    },
    {
      id: "INV-1004",
      customer: "Nisha Karki",
      date: "14 Sep 2026",
      amount: "Rs. 6,500",
      status: "Overdue",
    },
  ];

  return (

    <div>

      <div className="page-header">

        <div>

          <h1>Invoices</h1>

          <p>
            Create and manage your invoices.
          </p>

        </div>

        <button className="primary-button">
          + Create Invoice
        </button>

      </div>

      <div className="card">

        <div className="search-row">

          <input
            type="text"
            placeholder="Search invoice..."
            className="search-input"
          />

          <select className="select-box">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>

        </div>

        <table>

          <thead>

            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {invoices.map(
              (invoice) => (

                <tr key={invoice.id}>

                  <td>
                    <strong>
                      {invoice.id}
                    </strong>
                  </td>

                  <td>
                    {invoice.customer}
                  </td>

                  <td>
                    {invoice.date}
                  </td>

                  <td>
                    {invoice.amount}
                  </td>

                  <td>

                    <span
                      className={`badge ${invoice.status.toLowerCase()}`}
                    >
                      {invoice.status}
                    </span>

                  </td>

                  <td>

                    <button className="small-button">
                      View
                    </button>

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

export default Invoices;