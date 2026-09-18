import { useState } from "react";

function Customers() {

  const [customers] = useState([
    {
      id: 1,
      name: "Ram Sharma",
      email: "ram@example.com",
      phone: "9841000000",
      status: "Active",
    },
    {
      id: 2,
      name: "Sita Thapa",
      email: "sita@example.com",
      phone: "9851000000",
      status: "Active",
    },
    {
      id: 3,
      name: "Aarav Joshi",
      email: "aarav@example.com",
      phone: "9861000000",
      status: "Active",
    },
    {
      id: 4,
      name: "Nisha Karki",
      email: "nisha@example.com",
      phone: "9871000000",
      status: "Inactive",
    },
  ]);

  return (

    <div>

      <div className="page-header">

        <div>

          <h1>Customers</h1>

          <p>
            Manage your customers and their information.
          </p>

        </div>

        <button className="primary-button">
          + Add Customer
        </button>

      </div>

      <div className="card">

        <div className="search-row">

          <input
            type="text"
            placeholder="Search customers..."
            className="search-input"
          />

          <button className="secondary-button">
            Filter
          </button>

        </div>

        <table>

          <thead>

            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {customers.map(
              (customer) => (

                <tr key={customer.id}>

                  <td>
                    <strong>
                      {customer.name}
                    </strong>
                  </td>

                  <td>
                    {customer.email}
                  </td>

                  <td>
                    {customer.phone}
                  </td>

                  <td>

                    <span className="badge paid">
                      {customer.status}
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

export default Customers;