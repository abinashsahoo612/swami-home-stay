import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";
import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";

const Team = () => {
  const teamItem = [
    "/img/banners/img1.webp",
    "/img/banners/img2.webp",
    "/img/banners/img3.webp",
    "/img/banners/img4.webp",
    "/img/banners/img5.webp",
    "/img/banners/img6.webp",
    "/img/banners/img7.webp",
    "/img/banners/img8.webp",
    "/img/banners/img9.webp",
    "/img/banners/img10.webp",
    '/img/majestic-banquet/image2.jpg',
    '/img/royal-bliss-banquet/image1.jpg',
  ]
  return (
    <div className="team__area section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="team__area-title">
              <span className="subtitle__one">Our Gallery</span>
              <h2>Our Rooms</h2>
            </div>
          </div>
        </div>
        <div className="row">
              {teamItem?.map((data, id) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={data}>
                  <div className="team__area-item">
                    <div
                      className="team__area-item-image mt-30"
                      style={{
                        height: "250px", // or any height you want
                        width: "100%",
                        overflow: "hidden",
                        borderRadius: "12px"
                      }}
                    >
                      <img
                        alt=""
                        src={data}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
