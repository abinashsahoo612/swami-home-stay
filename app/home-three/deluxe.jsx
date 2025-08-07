"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/banners/8.jpeg" },
    { image: "/img/banners/5.jpeg" },
    { image: "/img/banners/1.jpeg" },
    { image: "/img/banners/6.jpeg" },
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
                <h4 id="">Deluxe Non AC Room</h4>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          {/* Existing Gallery Images */}
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="gallery__area-item">
                  <img className="w-100" src={item.image} alt="Room Image" />
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
