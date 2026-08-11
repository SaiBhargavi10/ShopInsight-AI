import { Link, useParams } from "react-router-dom";

function Reviews() {
  const { id } = useParams();

  const products = {
    1: "Smartphone Pro",
    2: "Ultra Laptop",
    3: "Wireless Headphones",
    4: "Smart Watch",
    5: "Bluetooth Speaker",
    6: "Tablet Air",
  };

  const reviews = [
    {
      id: 1,
      name: "Rahul",
      rating: 5,
      text: "The phone has excellent performance and the battery lasts all day. Very happy with the purchase.",
      sentiment: "Positive",
    },

    {
      id: 2,
      name: "Priya",
      rating: 4,
      text: "Good display and camera quality. The phone works smoothly for everyday use.",
      sentiment: "Positive",
    },

    {
      id: 3,
      name: "Arjun",
      rating: 3,
      text: "The product is good overall, but the battery could have been better.",
      sentiment: "Neutral",
    },

    {
      id: 4,
      name: "Sneha",
      rating: 2,
      text: "The phone looks good but I experienced some performance issues after using it for a few days.",
      sentiment: "Negative",
    },

    {
      id: 5,
      name: "Kiran",
      rating: 5,
      text: "Really impressed with the quality. Everything works as expected and the design is great.",
      sentiment: "Positive",
    },
  ];

  const productName = products[id] || "Product";

  return (
    <main className="reviews-page">

      {/* Header */}

      <section className="reviews-header">

        <p className="section-label">
          CUSTOMER REVIEWS
        </p>

        <h1>
          {productName}
        </h1>

        <p>
          Read what customers are saying about this product.
        </p>

      </section>


      {/* Review Summary */}

      <section className="review-summary">

        <div className="summary-card">

          <h2>4.4</h2>

          <div className="summary-stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            Based on 124 reviews
          </p>

        </div>


        <div className="summary-stat">

          <strong>72%</strong>

          <span>Positive Reviews</span>

        </div>


        <div className="summary-stat">

          <strong>18%</strong>

          <span>Neutral Reviews</span>

        </div>


        <div className="summary-stat">

          <strong>10%</strong>

          <span>Negative Reviews</span>

        </div>

      </section>


      {/* Reviews */}

      <section className="reviews-section">

        <div className="reviews-section-header">

          <div>

            <h2>Customer Reviews</h2>

            <p>
              Recent customer feedback
            </p>

          </div>

          <select className="review-filter">

            <option>All Reviews</option>

            <option>Positive</option>

            <option>Neutral</option>

            <option>Negative</option>

          </select>

        </div>


        <div className="reviews-list">

          {reviews.map((review) => (

            <div
              className="review-card"
              key={review.id}
            >

              <div className="review-top">

                <div className="review-user">

                  <div className="user-avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h3>
                      {review.name}
                    </h3>

                    <div className="review-stars">
                      {"⭐".repeat(review.rating)}
                    </div>

                  </div>

                </div>


                <span
                  className={`sentiment-badge ${review.sentiment.toLowerCase()}`}
                >
                  {review.sentiment}
                </span>

              </div>


              <p className="review-text">
                {review.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Back */}

      <div className="reviews-back">

        <Link to={`/products/${id}`}>
          ← Back to Product
        </Link>

      </div>

    </main>
  );
}

export default Reviews;