const Services = () => {
  return (
    <div className="services__two section-padding pt-0">
      <div className="container">
              <h2 className="pb-5">Highlights</h2>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>01</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/car-parking.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Car Parking</h4>
                <p>
                Ample on-site parking available for guests, ensuring the safety and convenience of your vehicles during your stay.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
            <div className="services__two-item">
              <span>02</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/cleaning-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Free WiFi</h4>
                <p>
                Stay connected with complimentary high-speed Wi-Fi available throughout the hotel, ensuring you can work or browse with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>03</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/lounge (2).png" alt="" />
              </div>
              <div className="services__two-item-content">
              <h4>Food & Beverages</h4>
              <p>
              Homemade breakfast, veg & non-veg meals available. Enjoy in your room or our lawn area. Tea, coffee, and cold drinks on request.
              </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services__two-item">
              <span>04</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/location-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Same Day Laundry</h4>
                <p>
                  Enjoy hassle-free laundry services with our same-day laundry option, ensuring your clothes are fresh and clean during your stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
