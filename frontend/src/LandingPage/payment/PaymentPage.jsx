// src/pages/PaymentPage.jsx
import React, { useState } from "react";
// import { PaymentContext } from "../../contexts/PaymentContext.jsx";
import { useCart } from "../../contexts/CartContext.jsx";


import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  Stack
} from "@mui/material";

const PaymentPage = () => {
  const [method, setMethod] = useState("Card");
  const { cart, fetchCart } = useCart();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const loadCart = async () => {
      await fetchCart();
      setLoading(false);
    };
    loadCart();
  }, []);

  const handlePayment = () => {
    alert("Sorry !! Payment Gateway is yet not supported by our website.");
  };

  if (loading) {
    return <Typography textAlign="center" mt={5}>Loading cart...</Typography>;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" bgcolor="#f5f5f5" p={2}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Payment Options
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            Total Amount: ₹{cart?.totalPrice ?? 0}
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup value={method} onChange={(e) => setMethod(e.target.value)}>
              {["Card", "UPI", "COD"].map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="primary" fullWidth onClick={handlePayment}>
            Pay Now
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};
 

export default PaymentPage;
