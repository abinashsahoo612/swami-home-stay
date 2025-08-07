import Social from "../socials/page";

const Contactcontainer = () => {
  return (
    <>
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row pb-30 pb-md-20">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>
                  FOR GROUP BOOKING/
                    WEDDING BOOKING
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Contact No</span>
                    <h6>
                      <a href="tel:+91-9823712760">+91-9823712760</a> <br/><a href="tel:+91-9823331100">+91-9823331100</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <a href="mailto:reservations@babaresort.com">reservations@babaresort.com</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="#">Nalva Road, Nandurbar,
                        Maharashtra-425412 </a>
                    </h6>
                  </div>
                </div>
              </div>
              {/* <div className="contact__area-social">
                <Social />
              </div> */}
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3714.9296881059213!2d74.235894!3d21.392673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDIzJzMzLjYiTiA3NMKwMTQnMDkuMiJF!5e0!3m2!1sen!2sin!4v1752316233546!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3714.9296881059213!2d74.235894!3d21.392673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDIzJzMzLjYiTiA3NMKwMTQnMDkuMiJF!5e0!3m2!1sen!2sin!4v1752316233546!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
