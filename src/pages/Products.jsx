function Products() {

  const products = [
    {
      id: 1,
      name: "Plagiarism Check",
      description: "Standard plagiarism detection",
      tokens: 50,
      status: "Active",
    },
    {
      id: 2,
      name: "AI Detection",
      description: "AI generated content detection",
      tokens: 30,
      status: "Active",
    },
    {
      id: 3,
      name: "Format Verification",
      description: "Document format verification",
      tokens: 10,
      status: "Active",
    },
    {
      id: 4,
      name: "Premium Check",
      description: "Advanced plagiarism analysis",
      tokens: 100,
      status: "Active",
    },
  ];

  return (

    <div>

      <div className="page-header">

        <div>

          <h1>Products</h1>

          <p>
            Manage services and token prices.
          </p>

        </div>

        <button className="primary-button">
          + Add Product
        </button>

      </div>

      <div className="product-grid">

        {products.map(
          (product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-icon">
                ◈
              </div>

              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>

              <div className="product-footer">

                <div>

                  <strong>
                    {product.tokens}
                  </strong>

                  <span>
                    tokens
                  </span>

                </div>

                <span className="badge paid">
                  {product.status}
                </span>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default Products;