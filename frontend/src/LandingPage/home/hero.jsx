import React, { useEffect, useState } from "react";
import Slider from "./slider.jsx"
import OpenAccount from "../OpenAccount.jsx";
import Cards from "./cards.jsx";
import HomeImage from "./homeImage.jsx"
import Seq_Cards from "./seq_cards.jsx";
import { Snackbar, Alert } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext"; 


function hero() {

  const { isAuthenticated, userData } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setOpen(true); // show snackbar when user logs in
    }
  }, [isAuthenticated]);

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
    <Slider/>
    <Cards/>
    <HomeImage/>
    <Seq_Cards/>
    <OpenAccount/>
    <Snackbar
        open={open}
        autoHideDuration={3000} // hide after 3s
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {`Welcome back ${userData?.username || "User"}! 🎉`}
        </Alert>
      </Snackbar>
    </>
  );
}

export default hero;
