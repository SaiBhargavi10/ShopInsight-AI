import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const products = {
    1: {
      name: "Smartphone Pro",
      category: "Electronics",
      rating: 4.4,
      reviews: 124,
      description:
        "A powerful smartphone designed for everyday use with a high-quality display, reliable performance, and long-lasting battery.",
    },

    2: {
      name: "Ultra Laptop",
      category: "Computers",
      rating: 4.6,
      reviews: 98,
      description:
        "A lightweight laptop with strong performance, a clear display, and a design suitable for work and everyday use.",
    },

    3: {
      name: "Wireless Headphones",
      category: "Audio",
      rating: 4.2,
      reviews: 156,
      description:
        "Comfortable wireless headphones with clear audio quality and a convenient design for everyday listening.",
    },

    4: {
      name: "Smart Watch",
      category: "Wearables",
      rating: 4.3,
      reviews: 87,
      description:
        "A smart wearable device that combines fitness tracking, notifications, and everyday convenience.",
    },

    5: {
      name: "Bluetooth Speaker",
      category: "Audio",
      rating: 4.1,
      reviews: 73,
      description:
        "A portable Bluetooth speaker designed to provide convenient wireless audio for everyday use.",
    },

    6: {
      name: "Tablet Air",
      category: "Electronics",
      rating: 4.5,
      reviews: 112,
      description:
        "A lightweight tablet suitable for entertainment, browsing, reading, and everyday productivity.",
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="product-details-page">

      {/* Product Information */}

      <section className="product-details">

        <div className="product-details-image">
          📦
        </div>

        <div className="product-details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="details-rating">
            <span>⭐ {product.rating}</span>

            <span>
              {product.reviews} customer reviews
            </span>
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <Link
            to={`/products/${id}/reviews`}
            className="primary-button"
          >
            View Customer Reviews
          </Link>

        </div>

      </section>


      {/* Sentiment Summary */}

      <section className="sentiment-summary">

        <div className="section-heading">

          <p className="section-label">
            REVIEW ANALYSIS
          </p>

          <h2>
            Customer Sentiment
          </h2>

          <p>
            A quick overview of how customers feel about this product.
          </p>

        </div>


        <div className="sentiment-grid">

          <div className="sentiment-card positive">

            <div className="sentiment-icon">
              😊
            </div>

            <h3>Positive</h3>

            <strong>72%</strong>

            <p>
              Customers with positive opinions
            </p>

          </div>


          <div className="sentiment-card neutral">

            <div className="sentiment-icon">
              😐
            </div>

            <h3>Neutral</h3>

            <strong>18%</strong>

            <p>
              Customers with neutral opinions
            </p>

          </div>


          <div className="sentiment-card negative">

            <div className="sentiment-icon">
              😞
            </div>

            <h3>Negative</h3>

            <strong>10%</strong>

            <p>
              Customers with negative opinions
            </p>

          </div>

        </div>

      </section>


      {/* Rating Summary */}

      <section className="rating-section">

        <div className="rating-summary">

          <h2>Overall Rating</h2>

          <div className="large-rating">
            ⭐ {product.rating}
          </div>

          <p>
            Based on {product.reviews} reviews
          </p>

        </div>


        <div className="rating-bars">

          <div className="rating-row">
            <span>5 ⭐</span>
            <div className="rating-bar">
              <div className="rating-fill five"></div>
            </div>
            <span>68%</span>
          </div>


          <div className="rating-row">
            <span>4 ⭐</span>
            <div className="rating-bar">
              <div className="rating-fill four"></div>
            </div>
            <span>20%</span>
          </div>


          <div className="rating-row">
            <span>3 ⭐</span>
            <div className="rating-bar">
              <div className="rating-fill three"></div>
            </div>
            <span>7%</span>
          </div>


          <div className="rating-row">
            <span>2 ⭐</span>
            <div className="rating-bar">
              <div className="rating-fill two"></div>
            </div>
            <span>3%</span>
          </div>


          <div className="rating-row">
            <span>1 ⭐</span>
            <div className="rating-bar">
              <div className="rating-fill one"></div>
            </div>
            <span>2%</span>
          </div>

        </div>

      </section>


      <div className="back-to-products">
        <Link to="/products">
          ← Back to Products
        </Link>
      </div>

    </main>
  );
}

export default ProductDetails;