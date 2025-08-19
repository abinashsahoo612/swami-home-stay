"use client";

const Contact = () => {
  return (
    <>
      <div className="contact__area section-padding pb-0" id="contact">
        <div className="container">
          <div className="row pb-30 pb-md-20">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>For Bookings & Inquiries</p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Contact No</span>
                    <h6>
                      <a href="tel:+91-9423281708">+91 9423281708</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-clock"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Check-in/Check-out</span>
                    <h6>
                      Check-in: 12:00 Noon
                      <br />
                      Check-out: 10:00 AM
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Resort Address</span>
                    <h6>
                      <a href="https://www.google.com/maps/place/Swami+Home+Stay/@16.8073656,74.1088489,19z/data=!4m15!1m5!3m4!2zMTbCsDQ4JzI2LjgiTiA3NMKwMDYnMzQuMSJF!8m2!3d16.8074444!4d74.1094722!3m8!1s0x3bc1af25e229eb2f:0x6f6d100046418e4a!5m2!4m1!1i2!8m2!3d16.8072376!4d74.1094631!16s%2Fg%2F11f1108vtm?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D">
                        Dannamma 229, Panhala Near Bajiprabhu Putla ( Statue )
                        Main Road Panhala, Dist - Kolhapur, Maharashtra 416201
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                {/* Update with correct Google Maps embed code for Panhala location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.3851690114625!2d74.1094631!3d16.8072376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1af25e229eb2f%3A0x6f6d100046418e4a!2sSwami%20Home%20Stay!5e0!3m2!1sen!2sin!4v1754569080322!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
