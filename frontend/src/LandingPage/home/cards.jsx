import React from "react";

function Cards() {
  return (
    <div className="container-fluid">
      <p
        style={{
          marginTop: "110px",
          fontSize: "10vh",
          fontWeight: "",
          marginBottom:"18vh",
          fontStyle:"italic"
        }}
      >
        Our Speciality
      </p>

      <div className="row">
        {/* Card 1 */}
        <div className="col-1"></div>
        <div className="col-4">
          <div className="card border-0" style={{ width: "33rem" }}>
            <img
              src="/images/p1.jpg"
              className="card-img-top "
              alt="Delicious Dish"
              style={{ height: "70vh", objectFit: "cover" ,borderRadius:"0px"}}
            />
            <div className="card-body">
                <h2 >Burger</h2>
              <p className="card-text">
                Freshly prepared dishes with authentic flavors to delight your
                taste buds.
              </p>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        {/* Card 2 */}
        <div className="col-4">
          <div className="card border-0" style={{ width: "31rem" }}>
            <img
              src="/images/p2.jpeg"
              className="card-img-top"
              alt="Signature Dish"
              style={{ height: "70vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2>Noodles</h2>
              <p className="card-text">
                A perfect blend of tradition and innovation, crafted with love
                for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>

      </div>

      <div className="row" style={{marginTop:"15vh"}}>
        {/* Card 1 */}
        <div className="col-1"></div>
        <div className="col-4">
          <div className="card border-0" style={{ width: "33rem" }}>
            <img
              src="/images/p3.jpg"
              className="card-img-top "
              alt="Delicious Dish"
              style={{ height: "70vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2 >Chilly Panner</h2>
              <p className="card-text">
                Freshly prepared dishes with authentic flavors to delight your
                taste buds.
              </p>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        {/* Card 2 */}
        <div className="col-4">
          <div className="card border-0" style={{ width: "31rem" }}>
            <img
              src="/images/p4.jpg"
              className="card-img-top"
              alt="Signature Dish"
              style={{ height: "70vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2>Pizza</h2>
              <p className="card-text">
                A perfect blend of tradition and innovation, crafted with love
                for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>

      </div>
    </div>
  );
}

export default Cards;
