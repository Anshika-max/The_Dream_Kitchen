import { useEffect, useContext } from "react";
import { useCart } from "../../contexts/CartContext.jsx";
// import { PaymentContext } from "../../contexts/PaymentContext.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CartHero() {
  // Payment + Auth
  // const { setCartItems } = useContext(PaymentContext);
  

  // Cart
  const { cart, fetchCart, removeFromCart } = useCart();
   const navigate = useNavigate();
   
  useEffect(() => {
    fetchCart();
  }, []);

   const handleBuyNow = () => {
    navigate("/address");
  };

  if (!cart || cart.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5" color="text.secondary">
          🛒 Your cart is empty.
          <br></br>
          <br></br>
          <br></br>
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Your Cart
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {cart.items.map((item) => (
          <Grid size={{xs:12}} key={item.product._id || item._id}>
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.product.productname}
                </Typography>
                <Typography color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography color="text.secondary">
                  Price: ₹{item.product.price} each
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.product._id)}
                >
                  Remove
                </Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleBuyNow} // pass cart items
                >
                  Buy Now
                </Button>
      <Typography variant="h5" align="right" fontWeight="bold">
        Total: ₹{cart.totalPrice}
      </Typography>
    </Container>
  );
}

export default CartHero;
