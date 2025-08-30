import React from "react";

function Cards() {
  return (
    <div className="container-fluid">
      <p
        className="text-center fw-bold fst-italic"
        style={{
          marginTop: "100px",
          fontSize: "clamp(24px, 6vw, 60px)", // Responsive font size
          marginBottom: "10vh",
        }}
      >
        Our Speciality
      </p>

      <div className="row g-4 justify-content-center">
        {/* Card 1 */}
        <div className="col-md-5 col-12">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="/images/p1.jpg"
              className="card-img-top img-fluid"
              alt="Burger"
              style={{ objectFit: "cover", borderRadius: "0px", maxHeight: "400px" }}
            />
            <div className="card-body text-center">
              <h2>Burger</h2>
              <p className="card-text">
                Freshly prepared dishes with authentic flavors to delight your taste buds.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-5 col-12">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="/images/p2.jpeg"
              className="card-img-top img-fluid"
              alt="Noodles"
              style={{ objectFit: "cover", borderRadius: "0px", maxHeight: "400px" }}
            />
            <div className="card-body text-center">
              <h2>Noodles</h2>
              <p className="card-text">
                A perfect blend of tradition and innovation, crafted with love for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row g-4 justify-content-center mt-5">
        {/* Card 3 */}
        <div className="col-md-5 col-12">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="/images/p3.jpg"
              className="card-img-top img-fluid"
              alt="Chilly Paneer"
              style={{ objectFit: "cover", borderRadius: "0px", maxHeight: "400px" }}
            />
            <div className="card-body text-center">
              <h2>Chilly Paneer</h2>
              <p className="card-text">
                Freshly prepared dishes with authentic flavors to delight your taste buds.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-5 col-12">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="/images/p4.jpg"
              className="card-img-top img-fluid"
              alt="Pizza"
              style={{ objectFit: "cover", borderRadius: "0px", maxHeight: "400px" }}
            />
            <div className="card-body text-center">
              <h2>Pizza</h2>
              <p className="card-text">
                A perfect blend of tradition and innovation, crafted with love for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
