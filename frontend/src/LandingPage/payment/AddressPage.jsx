import React, { useState, useContext } from "react";
// import { PaymentContext } from "../../contexts/PaymentContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

const AddressPage = () => {
//   const { setDeliveryAddress, cartItems, totalPrice } = useContext(PaymentContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {

    navigate("/payment");
    // e.preventDefault();
    // setDeliveryAddress(formData);

    // try {
    //   const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/orders/place`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //     body: JSON.stringify({
    //       items: cartItems,
    //       totalPrice,
    //       deliveryAddress: formData,
    //     }),
    //   });

    //   const data = await res.json();
    //   if (!res.ok) return alert(data.message || "Order creation failed");

    //   navigate("/payment");
    // } catch (error) {
    //   console.error("Order error:", error);
    //   alert("Something went wrong creating order.");
    // }
  };

  return (
    <Box maxWidth={500} mx="auto" mt={5} p={4} sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: "background.paper" }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>Delivery Address</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {["street", "city", "state", "zip"].map((field) => (
            <TextField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              fullWidth
            />
          ))}
          <TextField label="Country" name="country" value="India" disabled fullWidth />

          <Button type="submit" variant="contained" color="primary" fullWidth>Continue to Payment</Button>
        
        </Stack>
      </form>
    </Box>
  );
};

export default AddressPage;
