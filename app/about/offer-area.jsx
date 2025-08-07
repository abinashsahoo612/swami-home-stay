"use client";
import Image from "next/image";
import about_img from "../../public/img/features/about_img.webp";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Company Offers</span>
                <h2>Experience Comfort, Cuisine & Leisure at Baba Resort</h2>
                <p>
                  Enjoy air-conditioned rooms, complimentary breakfast at our ground-level restaurant,
                  and full access to the swimming pool. Relish your evenings at 
                  Madira Lounge and savor delightful meals at Baba’s Kitchen. Room service is available 
                  daily from 7:30 AM to 11:00 PM. Whether you're on a relaxing vacation or planning 
                  a group or wedding event — we’re here to turn moments into memories.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={about_img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
