"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/rooms/img1.jpg" },
    { image: "/img/rooms/img2.jpg" },
    { image: "/img/rooms/img3.jpg" },
    { image: "/img/rooms/img4.jpg" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  console.log("delux called");
  return (
    <>
      <div className="gallery__area section-padding pb-4 pb-md-5 overflow-hidden" id="rooms">
        <div className="container-fluid p-0">
          {/* Added Heading Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="section-title">
                <span className="subtitle__one">rooms</span>
                <h2 id="rooms">Our Rooms</h2>
                {/* <h4 id="">Deluxe Non AC Room</h4> */}
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          {/* Existing Gallery Images */}
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="team__area-item-image"
                style={{
                    height: "250px",
                    width: "100%",
                    overflow: "hidden",
                  }}>
                  <img className="w-100" src={item.image} alt="Room Image" 
                  style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      marginLeft:"10px"
                    }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
