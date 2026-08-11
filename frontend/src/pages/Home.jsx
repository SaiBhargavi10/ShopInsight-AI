function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <p className="hero-label">
            INTELLIGENT REVIEW ANALYTICS
          </p>

          <h1>
            Understand What Your Customers
            <span> Really Think</span>
          </h1>

          <p className="hero-description">
            ShopInsight AI analyzes product reviews and transforms
            customer feedback into simple, meaningful insights.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Explore Products
            </button>

            <button className="secondary-button">
              View Analytics
            </button>
          </div>

        </div>
      </section>


      {/* Features Section */}
      <section className="features-section">

        <div className="section-heading">
          <p className="section-label">FEATURES</p>

          <h2>
            Turn Reviews Into Insights
          </h2>

          <p>
            Everything you need to understand customer feedback.
          </p>
        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">😊</div>

            <h3>Sentiment Analysis</h3>

            <p>
              Automatically identify whether customer reviews
              are positive, neutral, or negative.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">⭐</div>

            <h3>Review Insights</h3>

            <p>
              Understand customer opinions and discover
              what people like or dislike about products.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📊</div>

            <h3>Analytics Dashboard</h3>

            <p>
              View review statistics and sentiment trends
              through simple and interactive charts.
            </p>
          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="how-section">

        <div className="section-heading">
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            Three Simple Steps
          </h2>
        </div>


        <div className="steps-grid">

          <div className="step">
            <div className="step-number">01</div>

            <h3>Choose a Product</h3>

            <p>
              Browse products and select the one you want
              to understand better.
            </p>
          </div>


          <div className="step">
            <div className="step-number">02</div>

            <h3>Analyze Reviews</h3>

            <p>
              ShopInsight AI analyzes customer reviews
              using sentiment analysis.
            </p>
          </div>


          <div className="step">
            <div className="step-number">03</div>

            <h3>Get Insights</h3>

            <p>
              View sentiment statistics and discover
              important customer feedback.
            </p>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="cta-section">

        <h2>
          Ready to Understand Your Reviews?
        </h2>

        <p>
          Explore products and discover what customers really think.
        </p>

        <button className="primary-button">
          Explore Products
        </button>

      </section>

    </main>
  );
}

export default Home;