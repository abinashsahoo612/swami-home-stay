import { images } from "@/next.config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  // Change images
    const teamItem = [
      "/img/banners/3.jpeg",
      "/img/banners/4.jpeg",
      "/img/banners/5.jpeg",
      "/img/banners/6.jpeg",
      "/img/banners/7.jpeg",
      "/img/banners/8.jpeg",
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Show one image at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024, // For tablets and smaller desktops
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, // For tablets
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, // For mobile devices
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="team__area section-padding" id="gallery">
        <div className="container">
          <div className="row mb-30">
            <div className="col-xl-12">
              <div className="team__area-title">
                <h2 id="gallery" >Gallery</h2>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {teamItem.map((data, id) => (
              <div key={data}>
                <div
                  className="team__area-item-image mt-30"
                  style={{
                    height: "250px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    alt=""
                    src={data}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      marginLeft:"10px"
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  