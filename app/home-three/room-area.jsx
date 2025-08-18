import Link from "next/link";
import LocationTable from "./locationTable";

const Roomarea = () => {
  const faqOne = [
    {
      id: "collapseOnePage",
      class: "icon page",
      class2: "faq__area-item-body collapse show",
      title: "Homestay Facilities ",
      des: "Our homestay offers a 3 BHK apartment with your choice of 3 deluxe rooms or 3 deluxe non-AC rooms, complemented by a spacious hall and a sit-out area featuring a swing (zula). Each room is furnished with a double bed, crisp white bedsheets and pillows, and a convenient side teapoy. For your entertainment, a TV with cable connection is provided, while a ceiling fan and mosquito repellent ensure a comfortable stay. The rooms feature clean, modern tile flooring, along with a cupboard and mirror for practical storage and grooming. Enjoy the convenience of 24-hour room service. The property is ideal for senior citizens and is especially suitable for families, ladies and married couples.",
    },
    {
      id: "collapseTwoPage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Bathroom",
      des: "Each room features an attached bathroom measuring 7/4 feet, equipped with an electric geyser, cold water supply, and a Western-style toilet. Fresh towels and soap are provided to ensure a comfortable and hygienic experience.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Additional Facilities",
      des: "Guests can enjoy a variety of additional facilities, including an in-house restaurant serving freshly prepared homemade meals. A selection of food and beverages such as bottled water, tea, coffee, milk, Bournvita, and soft drinks are available at an extra charge. Start your day with a homemade breakfast and savor pure vegetarian dinners, all prepared fresh for a homely dining experience. The property also features a private entrance and is surrounded by a lush garden, offering a peaceful and exclusive environment throughout your stay.",
    },
    {
      id: "collapseFourPage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Parking",
      des: "Free vehicle parking in the iron gate of Resort",
    },
    {
      id: "collapseFivePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Other Services",
      des: "Our facilities include CCTV surveillance in common areas for added security, reliable battery backup to ensure uninterrupted services, convenient laundry services for guests, and doctor-on-call support for any medical needs, ensuring a safe and comfortable stay.",
    },
    {
      id: "collapseSixPage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Terms and Conditions",
      des: "Please note the following important policies for your stay: Unmarried couples, pets, alcohol consumption, and smoking are strictly not allowed. Non-vegetarian food is also prohibited on the premises. Groups consisting of only men are not permitted. Check-in time is 12:00 PM noon and check-out is at 10:00 AM. Room rates are applicable for 2 adults and 2 children. Additional guests will incur extra charges, and a separate mattress will be provided. Children below 5 years of age stay free of charge. Music and sound systems are not allowed. Only families with valid identification are accepted for booking.",
    },
    {
      id: "collapseSevenPage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Cancellation Policy",
      des: "We offer a full refund if the booking is cancelled at least 6 days prior to the check-in date. However, cancellations made on the day of check-in are non-refundable.",
    },
  ];
  return (
    <div className="room__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="room__area-title">
              {/* <span className="subtitle__one">Our Features</span> */}
              <h2>Facilities & Amenities</h2>
              <p>
                Swami Home Stay provides comfortable rooms with double beds,
                clean linens, TV, and essential amenities. Attached bathrooms
                include hot/cold water and toiletries. Facilities like CCTV,
                backup, and doctor-on-call ensure safety. Full refund available
                for cancellations six days prior.
              </p>
              <div className="room__area-title-contact">
                {/* <Link className="theme-btn" href="#contact">
                  Contact us<i className="fal fa-long-arrow-right"></i>
                </Link> */}
                {/* <div className="room__area-title-contact-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <div className="room__area-title-contact-content">
                  <span>
                    <a href="tel:+123(458)585568">+91-9823331100</a>
                  </span>
                </div> */}
                <LocationTable />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6">
            <div className="room__details-right-faq">
              <div id="accordionExamplePage">
                {faqOne?.map((data, id) => (
                  <div className="faq__area-item" key={id}>
                    <h5
                      className={data.class}
                      data-bs-toggle="collapse"
                      data-bs-target={`#${data.id}`}
                    >
                      {data.title}
                    </h5>
                    <div
                      id={data.id}
                      className={data.class2}
                      data-bs-parent="#accordionExamplePage"
                    >
                      <p>{data.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomarea;
