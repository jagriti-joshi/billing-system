function Sidebar({ currentPage, setCurrentPage }) {

  const menuItems = [
    {
      name: "Dashboard",
      icon: "▦",
    },
    {
      name: "Billing",
      icon: "▣",
    },
    {
      name: "Customers",
      icon: "♙",
    },
    {
      name: "Invoices",
      icon: "▤",
    },
    {
      name: "Payments",
      icon: "▤",
    },
    {
      name: "Products",
      icon: "□",
    },
    {
      name: "Reports",
      icon: "▥",
    },
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          B
        </div>

        <div>
          <h2>BillingPro</h2>
          <span>Management System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <p className="menu-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (

          <button
            key={item.name}
            className={
              currentPage === item.name
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setCurrentPage(item.name)}
          >

            <span className="nav-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </button>

        ))}

      </nav>

      {/* Bottom section */}
      <div className="sidebar-bottom">

        <div className="help-box">
          <div className="help-icon">
            ?
          </div>

          <div>
            <strong>Need Help?</strong>
            <p>Contact support</p>
          </div>
        </div>

        <div className="user-box">

          <div className="user-avatar">
            J
          </div>

          <div className="user-info">
            <strong>Jagriti</strong>
            <span>Administrator</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;