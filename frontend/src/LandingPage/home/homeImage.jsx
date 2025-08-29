import React from "react";

function HomeImage() {
  return (
  <div className="container-fluid mt-5">
    <div className="row">
        <div className="col">
            <br></br>
            <br></br>     
            <p style={{fontWeight:"bold",fontSize:"40px",fontStyle:"italic"}}>Where Every Flavour Tells A Story... </p>
            <br></br>
            <h4>A celebration of taste, An experience of warmth, A journey you’ll always remember.</h4>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col-4 p-5" style={{marginTop:"80px"}}>
            <h3>The Dream Kitchen</h3>
            <p>“Where fine dining meets warmth. Discover rich flavors, curated with passion, and served in an ambiance that feels like home.”</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Come Hungry, Leave Happy</h3>
            <p>“A perfect place to celebrate food, laughter, and togetherness with every plate served.”</p>
        </div>
        <div className="col-4 mt-5">
            <img src="../images/HomeMain.jpg" alt="" style={{height:"70vh",width:"35vw",borderRadius:"2%"}}/>
        </div>
         <div className="col-4 p-5" style={{marginTop:"80px"}}>
            <h3 style={{paddingLeft:"16px"}}>Fresh. Flavorful. Unforgettable.</h3>
            <p>“We believe great food starts with fresh ingredients, a touch of creativity, and a lot of love.”</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>More Than Just a Meal</h3>
            <p>“At The Dream Kitchen, we don’t just serve food—we serve experiences worth remembering.”</p>
        </div>
  </div>
  </div>
  );
}

export default HomeImage;
