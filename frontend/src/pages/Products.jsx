import { Link } from "react-router-dom";
function Products() {
  const products = [
    {
      id: 1,
      name: "Smartphone Pro",
      category: "Electronics",
      rating: 4.4,
      reviews: 124,
    },
    {
      id: 2,
      name: "Ultra Laptop",
      category: "Computers",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      category: "Audio",
      rating: 4.2,
      reviews: 156,
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Wearables",
      rating: 4.3,
      reviews: 87,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Audio",
      rating: 4.1,
      reviews: 73,
    },
    {
      id: 6,
      name: "Tablet Air",
      category: "Electronics",
      rating: 4.5,
      reviews: 112,
    },
  ];

  return (
    <main className="products-page">

      <section className="products-header">
        <p className="section-label">PRODUCTS</p>

        <h1>Explore Products</h1>

        <p>
          Browse products and discover what customers really think.
        </p>
      </section>


      <section className="products-section">

        <div className="products-toolbar">

          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />

          <select className="category-select">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Computers</option>
            <option>Audio</option>
            <option>Wearables</option>
          </select>

        </div>


        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">
                📦
              </div>

              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <div className="product-rating">
                  <span>⭐ {product.rating}</span>

                  <span>
                    {product.reviews} reviews
                  </span>
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="view-product-button"
                >
                  View Product →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Products;