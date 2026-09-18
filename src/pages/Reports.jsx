function Reports() {

  return (

    <div>

      <div className="page-header">

        <div>

          <h1>Reports</h1>

          <p>
            View billing and business reports.
          </p>

        </div>

        <button className="secondary-button">
          Export Report
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon green">
            Rs
          </div>

          <p className="stat-title">
            Total Revenue
          </p>

          <h2>
            Rs. 125,450
          </h2>

        </div>

        <div className="stat-card">

          <div className="stat-icon blue">
            ◉
          </div>

          <p className="stat-title">
            Tokens Sold
          </p>

          <h2>
            12,500
          </h2>

        </div>

        <div className="stat-card">

          <div className="stat-icon purple">
            ♙
          </div>

          <p className="stat-title">
            Active Customers
          </p>

          <h2>
            126
          </h2>

        </div>

        <div className="stat-card">

          <div className="stat-icon orange">
            ▤
          </div>

          <p className="stat-title">
            Documents Checked
          </p>

          <h2>
            1,250
          </h2>

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="card">

          <div className="card-header">

            <div>

              <h2>
                Monthly Usage
              </h2>

              <p>
                Token usage throughout the year
              </p>

            </div>

          </div>

          <div className="simple-chart">

            <div className="chart-bars">

              {[40, 55, 45, 70, 60, 80, 65, 90, 75, 85, 95, 78].map(
                (height, index) => (

                  <div
                    className="chart-column"
                    key={index}
                  >

                    <div
                      className="chart-bar"
                      style={{
                        height: `${height}%`,
                      }}
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

        <div className="card">

          <div className="card-header">

            <div>

              <h2>
                Usage Summary
              </h2>

              <p>
                Current system usage
              </p>

            </div>

          </div>

          <div className="report-list">

            <div className="report-row">
              <span>Plagiarism Check</span>
              <strong>6,250 tokens</strong>
            </div>

            <div className="report-row">
              <span>AI Detection</span>
              <strong>3,200 tokens</strong>
            </div>

            <div className="report-row">
              <span>Format Verification</span>
              <strong>1,050 tokens</strong>
            </div>

            <div className="report-row">
              <span>Premium Check</span>
              <strong>2,000 tokens</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;