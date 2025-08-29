import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useProducts } from "../../contexts/ProductContext.jsx";
import { useCategories } from "../../contexts/CategoryContext.jsx";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  TextField,
  CardActions,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const ManageProducts = () => {
  const { products, getProducts, addProduct, deleteProduct, loading } = useProducts();
  const { categories, getCategories } = useCategories(); // ✅ from CategoryContext

  const [formData, setFormData] = useState({
    productname: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    getProducts();
    getCategories(); // ✅ fetch categories too
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(formData);
    setFormData({
      productname: "",
      description: "",
      price: "",
      image: "",
      category: "",
      stock: "",
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/admin_dash" className="p-6">
        <HomeIcon sx={{ fontSize: 50, color: "black" }} />
      </Link>

      {/* Add Product Form */}
      <Card style={{ marginBottom: "2rem", padding: "1rem" }}>
        <Typography variant="h3" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleAddProduct}>
          <Grid container spacing={2}>
            {/* Product Name */}
            <Grid size={{xs:12,sm:6}}>
              <TextField
                name="productname"
                label="Product Name"
                fullWidth
                required
                value={formData.productname}
                onChange={handleChange}
              />
            </Grid>

            {/* Category Dropdown */}
            <Grid size={{xs:12,sm:6}}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formData.category || ""}
                  onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })}
                  displayEmpty
                >
                  {categories && categories.length > 0 ? (
                    categories.map((cat) => (
                      <MenuItem key={cat._id} value={cat._id}>
                        {cat.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No categories available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            {/* Description */}
            <Grid size={{xs:12,sm:6}}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={2}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            {/* Price */}
            <Grid size={{xs:12,sm:6}}>
              <TextField
                name="price"
                label="Price"
                type="number"
                fullWidth
                required
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>

            {/* Stock */}
            <Grid size={{xs:12,sm:6}}>
              <TextField
                name="stock"
                label="Stock"
                type="number"
                fullWidth
                value={formData.stock}
                onChange={handleChange}
              />
            </Grid>

            {/* Image */}
            <Grid size={{xs:12,sm:6}}>
              <TextField
                name="image"
                label="Image URL"
                fullWidth
                required
                value={formData.image}
                onChange={handleChange}
              />
            </Grid>
              <br></br>

            {/* Submit */}
            <Grid size={{xs:12,sm:12}}>
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
              <br></br>
              <br></br>
            </Grid>
          </Grid>
        </form>
      </Card>

      {/* Product List */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <Grid size={{xs:12,sm:6,md:3}} key={product._id}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt="Image not visible"
                    />
                    <CardContent>
                      <Typography variant="h6">{product.productname}</Typography>
                      <Typography color="textSecondary">
                        {product.category?.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                      
                      <Typography variant="body1">₹{product.price}</Typography>
                      <Typography variant="body2">
                        Stock: {product.stock}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No products available.</Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default ManageProducts;
