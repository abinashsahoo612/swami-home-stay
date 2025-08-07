import { Col, Row } from "react-bootstrap";

const Bookingarea = () => {
  return (
    <div
      // className="booking__area"
      style={{
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        padding: "90px 24px 70px",
        marginBottom: "32px",
        transition: "box-shadow 0.2s"
      }}
    >
      <div className="container">
        <div className="row mt-30 mb-30">
          <div className="col-xl-12">
            <div className="team__area-title">
              <span className="subtitle__one">TOTAL ROOMS 29, BANQUETS 2, WEDDING LAWN, POOLSIDE RESTAURANT,
                LOUNGE</span>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-12">
            <h5 className="mb-4">Rooms</h5>
          </div> */}

          {[
            {
              type: "Standard Room",
              area: "325 sq ft.",
              facilities: [
                "In Room Tea/Coffee Maker",
                "Access to Swimming Pool"
              ],
            },
            {
              type: "Royal Room",
              area: "325 sq ft.",
              facilities: [
                "In Room Tea/Coffee Maker",
                "Access to Swimming Pool"
              ],
            },
            {
              type: "Suite Room",
              area: "700 sq ft.",
              facilities: [
                "In Room Tea/Coffee Maker",
                "Access to Swimming Pool"
              ],
            }
          ].map((room, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="h-100">
                <h6 className="mb-2">{room.type}</h6>
                <p className="mb-1"><strong>Area:</strong> {room.area}</p>
                <p className="mb-1"><strong>Facilities:</strong></p>
                <ul className="ps-3 mb-0">
                  {room.facilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {/* Banquet Hall */}
          <div className="col-md-4 col-12 mb-4">
            <h5 className="mb-4">Banquet Hall</h5>
            <div className="h-100">
              {[
                {
                  name: "ROYAL BLISS",
                  diningarea: "2700 sq. ft.",
                  banquetarea: "3500 sq. ft.",
                  capacity: "350 pax",
                },
                {
                  name: "THE MAJESTIC",
                  diningarea: "1250 sq. ft.",
                  functionalhall: "1276 sq. ft.",
                  capacity: "100 pax",
                },
              ].map((hall, index) => (
                <div key={index} className="mb-3">
                  <h6 className="mb-1">{hall.name}</h6>
                  {hall.diningarea && <p className="mb-1"><strong>Dining Area:</strong> {hall.diningarea}</p>}
                  {hall.banquetarea && <p className="mb-1"><strong>Banquet Area:</strong> {hall.banquetarea}</p>}
                  {hall.functionalhall && <p className="mb-1"><strong>Functional Hall:</strong> {hall.functionalhall}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant and Bar */}
          <div className="col-md-4 col-12 mb-4">
            <h5 className="mb-4">Restaurant and Bar</h5>
            <div className="h-100">
              {[
                {
                  name: "MADIRA LOUNGE",
                  type: "Multi-Cuisine Lounge",
                  timing: "11.30 AM to 11.00 PM",
                },
                {
                  name: "Baba’s Kitchen - Poolside Restaurant",
                  type: "Multi-Cuisine Veg. Restaurant",
                  timing: "12.00 PM to 11.00 PM",
                },
              ].map((place, index) => (
                <div key={index} className="col-md-12 col-sm-12 mb-4">
                  <div className="h-100">
                    <h6 className="mb-2">{place.name}</h6>
                    <p className="mb-1"><strong>Type:</strong> {place.type}</p>
                    <p className="mb-0"><strong>Timings:</strong> {place.timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Highlights */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="mb-4">Menu Highlights</h5>
            <div className=" h-100">
              {[
                {
                  meal: "Breakfast",
                  timing: "8.00 am – 10.30",
                },
                {
                  meal: "Lunch",
                  timing: "12.00 – 3.30 pm",
                },
                {
                  meal: "Dinner",
                  timing: "7.00 – 11.00",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h6 className="mb-1">{item.meal}</h6>
                  <p className="mb-0"><strong>Timing:</strong> {item.timing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Bookingarea;
