import React from "react";
import {
  Container,
  Typography,
} from "@mui/material";

function OrderHero(){
    return(
        <>
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5" color="text.secondary">
          🛒 Your Order is empty.
          <br></br>
          <br></br>
          <br></br>
        </Typography>
      </Container>
        </>
    )
}

export default OrderHero;
