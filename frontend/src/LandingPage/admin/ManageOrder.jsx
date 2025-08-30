import React, { useEffect } from "react";
import {
  Container,
  Typography,
} from "@mui/material";

export default function ManageOrder(){
    return(
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5" color="text.secondary">
            Sorry!!
            <br></br>
          View Order is empty due to Payment Gateway is yet not supported by our website. .
          <br></br>
          <br></br>
          <br></br>
        </Typography>
      </Container>
    );
}