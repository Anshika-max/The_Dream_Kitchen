import React from "react";

function Slider() {
  return(
    <>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{height:"85vh",width:"auto"}}>
    <div className="carousel-item active">
      <img src="../images/scroll!.jpg" className="d-block w-100 contain" alt="..." style={{objectFit:"cover"}}/>
    </div>
    <div className="carousel-item">
      <img src="../images/scroll3.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/scroll4.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider;
