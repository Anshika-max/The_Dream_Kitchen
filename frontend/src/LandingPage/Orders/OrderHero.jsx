import React from "react";
import Typography from "@mui/material/Typography";

function OrderHero(){
    return(
        <>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 2,color:"red" }}>
          No items in your order.
          <br></br>
          <br></br>
        </Typography>
        </>
    )
}

export default OrderHero;
