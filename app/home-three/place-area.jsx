import Link from "next/link";

const Placearea = () => {
  return (
    <div className="place__area section-padding mt-35" id="kitchen">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="place__area-image">
              <div className="row">
                <div className="col-6">
                  <div className="place__area-image-one">
                    <img src="/img/4.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="place__area-image-two">
                    <img src="/img/a-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 lg-mt-30">
            <div className="place__area-title">
              <span className="subtitle__one">sitting area</span>
              <h2 id="kitchen" >We're a unique place to Spend time</h2>
              <p>
              Enjoy our serene outdoor spaces spread across 4000 square feet. 
              Our landscaped lawn area is perfect for outdoor dining or simply 
              relaxing in nature. With ground floor access and private entrances, 
              we ensure comfort for families and senior citizens alike.
              </p>
              <Link className="theme-btn" href="#about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placearea;
