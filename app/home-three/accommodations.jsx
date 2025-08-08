"use client"
import Link from "next/link";

const Accommodations = () => {
  console.log("accomadtion call");
  return (
    <div id="about" className="accommodations__two section-padding">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-xl-6 col-lg-6 lg-mb-30">
            <div className="accommodations__two-title">
              <span className="subtitle__one">Welcome to</span>
              <h2>Swami Home Stay Panhala</h2>
              <p>
                Located at 191 Rakshi, Panhala, Swami Home Stay offers a peaceful
                retreat with comfortable accommodations spread across 4000 square
                feet (4 Guntha) of serene surroundings. We specialize in
                providing a homely atmosphere perfect for families and couples
                seeking a relaxing getaway.
              </p>
              <div className="key-features mt-4">
                <h4>Resort Highlights:</h4>
                <ul className="feature-list">
                  <li>3 Different AC & Non AC Rooms with Ground Floor Access</li>
                  <li>24-Hour Security with CCTV Surveillance</li>
                  <li>In-house Restaurant with Homemade Food</li>
                  <li>Free Parking Facility</li>
                </ul>
              </div>
              <div className="key-features mt-4">
                <h4>Terms & Conditions:</h4>
                <ul className="feature-list">
                  <li>Unmarried couples not allowed.</li>
                  <li>Pets not allowed </li>
                  <li>Alcohol & smoking Consumption strictly prohibited</li>
                  <li>Group of Men not allowed </li>
                  <li>Music & sound not allowed </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="accommodations__two-right">
              <img
                src="/img/rooms/img4.jpg"
                alt="Swami Home Stay Exterior"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
