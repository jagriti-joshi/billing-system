function Dashboard() {

  const stats = [
    {
      title: "Total Revenue",
      value: "Rs. 125,450",
      change: "+12.5%",
      icon: "Rs",
      type: "green",
    },
    {
      title: "Total Invoices",
      value: "248",
      change: "+8.2%",
      icon: "▤",
      type: "blue",
    },
    {
      title: "Total Customers",
      value: "126",
      change: "+5.4%",
      icon: "♙",
      type: "purple",
    },
    {
      title: "Pending Amount",
      value: "Rs. 18,750",
      change: "-3.2%",
      icon: "◷",
      type: "orange",
    },
  ];

  const recentInvoices = [
    {
      id: "INV-1001",
      customer: "Ram Sharma",
      amount: "Rs. 12,500",
      status: "Paid",
    },
    {
      id: "INV-1002",
      customer: "Sita Thapa",
      amount: "Rs. 8,750",
      status: "Pending",
    },
    {
      id: "INV-1003",
      customer: "Aarav Joshi",
      amount: "Rs. 15,200",
      status: "Paid",
    },
    {
      id: "INV-1004",
      customer: "Nisha Karki",
      amount: "Rs. 6,500",
      status: "Overdue",
    },
  ];

  return (
    <div>

      {/* Header */}
      <div className="page-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        <button className="primary-button">
          + Create Invoice
        </button>

      </div>

      {/* Statistics */}
      <div className="stats-grid">

        {stats.map((stat) => (

          <div className="stat-card" key={stat.title}>

            <div className="stat-top">

              <div className={`stat-icon ${stat.type}`}>
                {stat.icon}
              </div>

              <span className="stat-change">
                {stat.change}
              </span>

            </div>

            <p className="stat-title">
              {stat.title}
            </p>

            <h2>
              {stat.value}
            </h2>

          </div>

        ))}

      </div>

      {/* Content */}
      <div className="dashboard-grid">

        {/* Revenue Chart */}
        <div className="card">

          <div className="card-header">

            <div>
              <h2>Revenue Overview</h2>
              <p>Monthly revenue for 2026</p>
            </div>

            <select className="select-box">
              <option>2026</option>
              <option>2025</option>
            </select>

          </div>

          <div className="simple-chart">

            <div className="chart-bars">

              {[45, 60, 48, 75, 65, 85, 70, 92, 78, 88, 96, 82].map(
                (height, index) => (
                  <div
                    className="chart-column"
                    key={index}
                  >
                    <div
                      className="chart-bar"
                      style={{ height: `${height}%` }}
                    ></div>

                    <span>
                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]
                      }
                    </span>
                  </div>
                )
              )}

            </div>

          </div>

        </div>

        {/* Invoice Status */}
        <div className="card">

          <div className="card-header">
            <div>
              <h2>Invoice Status</h2>
              <p>Current invoice overview</p>
            </div>
          </div>

          <div className="status-list">

            <div className="status-row">
              <span>
                <i className="status-dot paid"></i>
                Paid
              </span>
              <strong>156</strong>
            </div>

            <div className="status-row">
              <span>
                <i className="status-dot pending"></i>
                Pending
              </span>
              <strong>62</strong>
            </div>

            <div className="status-row">
              <span>
                <i className="status-dot overdue"></i>
                Overdue
              </span>
              <strong>30</strong>
            </div>

          </div>

        </div>

      </div>

      {/* Recent invoices */}
      <div className="card recent-card">

        <div className="card-header">

          <div>
            <h2>Recent Invoices</h2>
            <p>Your latest invoice activities</p>
          </div>

          <button className="text-button">
            View All
          </button>

        </div>

        <table>

          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {recentInvoices.map((invoice) => (

              <tr key={invoice.id}>

                <td>
                  <strong>{invoice.id}</strong>
                </td>

                <td>{invoice.customer}</td>

                <td>{invoice.amount}</td>

                <td>
                  <span
                    className={`badge ${invoice.status.toLowerCase()}`}
                  >
                    {invoice.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;