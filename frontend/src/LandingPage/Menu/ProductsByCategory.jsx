import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import {
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContext.jsx";
import { useCategories } from "../../contexts/CategoryContext.jsx";
import { useCart } from "../../contexts/CartContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

function ProductsByCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, getProducts } = useProducts();
  const { categories } = useCategories();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const [categoryName, setCategoryName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const category = categories.find((c) => c._id === id);
    if (category) setCategoryName(category.name);
  }, [categories, id]);

  const filteredProducts = products.filter(
    (p) => p.category && p.category._id === id
  );

  // ✅ Handle Add to Cart
  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      setOpenDialog(true);
    } else {
      await addToCart(productId);
      navigate("/cart"); // redirect to cart
    }
  };

  // ✅ Handle Buy Now
  const handleBuyNow = async (productId) => {
    if (!isAuthenticated) {
      setOpenDialog(true);
    } else {
      await addToCart(productId); // ensure added before order
      navigate("/address"); // redirect to order page
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        {categoryName || "Products"}
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <Grid
              key={prod._id}
              size={{
              xs:12,
              sm:6,
              md:3}}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card sx={{ width: "55rem", backgroundColor: "#f5f5f5" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={prod.image}
                    alt={prod.productname}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {prod.productname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {prod.description || "No description"}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      ₹{prod.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleAddToCart(prod._id)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => handleBuyNow(prod._id)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 4 }}>
            No products available in this category.
          </Typography>
        )}
      </Grid>

      {/* ✅ Popup Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          <Typography>You must login first to continue.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Link to={"/address"}>
          <Button
            onClick={() => (window.location.href = "/login")}
            color="primary"
            variant="contained"
          >
            Go to Login
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ProductsByCategory;
