import React from "react";

function Seq_Cards() {
  return (
    <div className="container-fluid">
      <p
        style={{
          marginTop: "140px",
          fontSize: "10vh",
          fontWeight: "",
          marginBottom:"12vh",
          fontStyle:"italic"
        }}
      >
        Sweets.. with smile
      </p>

      <div className="row">
        {/* Card 1 */}
        <div className="col"></div>

        <div className="col">
          <div className="card border-0" style={{ width: "20rem" }}>
            <img
              src="/images/s1.webp"
              className="card-img-top "
              alt="Delicious Dish"
              style={{ height: "50vh", objectFit: "cover" ,borderRadius:"0px"}}
            />
            <div className="card-body">
                <h2 >Gulab Jamun</h2>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col">
          <div className="card border-0" style={{ width: "20rem" }}>
            <img
              src="/images/s2.jpg"
              className="card-img-top"
              alt="Signature Dish"
              style={{ height: "50vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2>Gajar Ka Halua</h2>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0" style={{ width: "20rem" }}>
            <img
              src="/images/s3.jpg"
              className="card-img-top "
              alt="Delicious Dish"
              style={{ height: "50vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2 >Rasmalai</h2>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col">
          <div className="card border-0" style={{ width: "20rem" }}>
            <img
              src="/images/s4.webp"
              className="card-img-top"
              alt="Signature Dish"
              style={{ height: "50vh", objectFit: "cover",borderRadius:"0px" }}
            />
            <div className="card-body">
                <h2>Jalebi</h2>
            </div>
          </div>
        </div>
        <div className="col"></div>

      </div>

    </div>
  );
}

export default Seq_Cards;
