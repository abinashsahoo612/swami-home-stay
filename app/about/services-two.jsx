"use client";
import Image from "next/image";
import roomservice from "../../public/img/icon/room-service (1).png";
import aircond from "../../public/img/icon/air-conditioner (1).png";
import SwimmingPool from "../../public/img/icon/swimming (1).png";
import breakfast1 from "../../public/img/icon/breakfast1.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={aircond} />
                </div>
                <div className="services__two-item-content">
                <h4>Air Conditioned Rooms</h4>
                  <p>
                    Enjoy fully air-conditioned rooms with modern amenities for your comfort and relaxation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={breakfast1} />
                </div>
                <div className="services__two-item-content">
                <h4>Complimentary Breakfast</h4>
                  <p>
                    Start your day with a delicious breakfast served at our ground-level restaurant.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={SwimmingPool} />
                </div>
                <div className="services__two-item-content">
                <h4>Swimming Pool</h4>
                  <p>
                    Dive into our clean and refreshing swimming pool with crystal-clear water and a serene atmosphere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={roomservice} />
                </div>
                <div className="services__two-item-content">
                <h4>Room Service</h4>
                  <p>
                    Enjoy prompt food and drink service from 7:30 AM to 11:00 PM right in your room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
