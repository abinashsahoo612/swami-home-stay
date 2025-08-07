import Link from "next/link";
const faqData = {
  faqOne: [
    {
      id: "collapseOnePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do you pay before or after booking a hotel ?",
      des: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.",
    },
    {
      id: "collapseTwoPage",
      class: "icon page",
      class2: "faq__area-item-body collapse show",
      title: "What documents are needed for hotel booking ?",
      des: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do hotels charge your card before you check ?",
      des: "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.",
    },
  ],
};
const { faqOne } = faqData;

const ServicesDetails = () => {
  return (
    <div className="services__details section-padding">
      <div className="container">
        <div className="row">
          {/* <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
              <div className="all__sidebar-item">
                <h5>Category</h5>
                <div className="all__sidebar-item-category">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Small Suite
                        <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="/services-details">
                        <i className="far fa-angle-double-right"></i>Luxury Room
                        <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Single
                        <span>(05)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Family
                        <span>(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Double Room
                        <span>(03)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="all__sidebar-item-help mt-30"
                style={{ backgroundImage: `url('/img/hotel/hotel-9.jpg')` }}
              >
                <div className="all__sidebar-item-help-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <h5> Easy solutions to your home beauty</h5>
                <div className="all__sidebar-item-help-contact">
                  <div className="all__sidebar-item-help-contact-content">
                    <span>Quick Help</span>
                    <h6>
                      <Link href="tel:+125(895)658568">+125 (895) 658 568</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12">
            <div className="services__details-left">
              {/* <div className="services__details-left-image mb-30">
                <img src="/img/bar-kitchen/poolside.webp" alt="" />
              </div> */}
              <div className="services__details-left-content">
                <div className="services__details-left-content">
                  <div className="text-center mb-30">
                    <h2
                      className="mb-10"
                      style={{ fontWeight: 700, letterSpacing: "1px" }}
                    >
                      MADIRA LOUNGE
                    </h2>
                    <h4
                      className="mb-20"
                      style={{ color: "#b9935a", fontWeight: 600 }}
                    >
                      Where Every Sip Tells a Story
                    </h4>
                    <p
                      className="mb-30 mx-auto"
                      style={{ maxWidth: 700, color: "#444" }}
                    >
                      Step into Madira Lounge, the ultimate destination for
                      connoisseurs of fine spirits and crafted cocktails at Baba
                      Resort. Designed for those who appreciate the art of
                      drinking, our Lounge offers a sophisticated yet relaxed
                      ambiance, perfect for unwinding after a long day or
                      celebrating special moments with friends and colleagues.
                      With curated music, elegant interiors, and an extensive
                      selection of beverages, Madira Lounge promises an
                      unforgettable experience every time you visit.
                    </p>
                    <div
                      className="services__details-left-image mb-40"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src="/img/banners/img3.webp"
                        alt="Madira Lounge"
                        style={{
                          borderRadius: "16px",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                          width: "100%",
                          maxWidth: "800px",
                          height: "400px",
                          objectFit: "cover",
                          objectPosition: "bottom",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-center mb-20 mb-md-20 mt-40 mt-md-40">
                  Sip in Style at Madira Lounge – Where Liquid Excellence Meets
                  Luxury
                </h3>
                <p>
                  Elevate your evenings with our exquisite drink selection,
                  featuring world-class Scotch from iconic distilleries like
                  Glenfiddich, Jameson, Chivas Regal, and Johnnie Walker Blue
                  Label. Savor premium Indian single malts and blends such as
                  Blenders, Signature, and Oaksmith. Our signature cocktails are
                  bold, innovative creations, expertly shaken and stirred by our
                  skilled mixologists. Explore our boutique wine cellar,
                  showcasing handpicked reds, whites, and sparkling wines from
                  India’s finest vineyards. Complete your experience with
                  international brews, top-shelf vodkas, smooth gins, and rich
                  rums. Immerse yourself in our plush, mood-lit lounge, with
                  luxe seating, chic décor, and soft music setting the tone for
                  unforgettable moments.
                </p>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-6 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/bar-kitchen/poolside.webp"
                      alt=""
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <h3 className="mb-20">BABA’S KITCHEN </h3>
                    <p className="m-30">
                      The Poolside Restaurant Dine Under the Stars, By the Water
                      At Baba’s Kitchen, experience a magical blend of gourmet
                      flavours and serene poolside charm. Nestled beside the
                      sparkling waters of Baba Resort’s pool, this open-air
                      restaurant offers a refreshing escape under the evening
                      sky. Operating from 7:00 PM to 11:30 PM, it’s the perfect
                      spot for intimate gatherings, celebrations, or a relaxed
                      dinner with loved ones.
                    </p>
                    <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Timings-
                        11.30 AM To 11.00 PM
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Capacity up
                        to – 75 pax.
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="mb-20 mb-md-20 mt-40 mt-md-40">
                  Culinary Delights
                </h3>
                Indulge in a world of global vegetarian cuisine, thoughtfully
                curated to please every palate. Savor Indian classics like rich
                curries, tandoori delights, and popular street-food favorites.
                Enjoy Italian specialties including wood-fired pizzas and
                freshly made pastas. For lovers of Asian flavors, the menu also
                features stir-fries and aromatic Thai curries that offer a
                perfect blend of spice and fragrance.
                <h3 className="mb-20 mb-md-20 mt-40 mt-md-40">
                  Ambiance & Experience
                </h3>
                Evenings come alive in a magical ambiance, where the soft glow
                of lanterns and twinkling fairy lights reflect off the
                shimmering pool, casting a warm and inviting radiance across the
                entire space. The setting is nothing short of enchanting,
                perfect for creating unforgettable memories. Thoughtfully
                arranged tables offer a seamless blend of comfort and elegance,
                with cozy seating nooks and refined setups that suit both
                intimate dinners and lively celebrations. The tranquil sounds of
                water, combined with the ambient lighting and lush surroundings,
                make every evening feel like a serene escape—an experience that
                truly elevates every gathering into something extraordinary.
                <h3 className="mb-20 mb-md-20 mt-40 mt-md-40">
                  Celebrate in Style: The Ideal Venue for Every Occasion
                </h3>
                <p>
                  Whether it's a birthday party celebrated with a splash, a
                  romantic engagement dinner under the stars, a laid-back family
                  get-together, or a stylish corporate mixer, this venue offers
                  the perfect setting for all types of private events. The
                  restaurant accommodates up to 75 guests for regular dining,
                  while the private poolside area allows for custom setups that
                  can host up to 100 guests. Special birthday packages are also
                  available, catering to up to 75 guests with exclusive use of
                  half the poolside area and a dedicated buffet counter.
                </p>
                <p>
                  Adding a personal touch is easy, with customizable themed
                  décor that matches your event’s style and mood. Keep your
                  guests engaged with live food counters—whether it's pasta,
                  chaat, or a stylish bar setup—bringing an interactive and
                  flavorful element to your celebration. Poolside lounging and
                  optional dip-in dining arrangements create a relaxed and
                  refreshing atmosphere, making every gathering not just an
                  event, but a memorable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
