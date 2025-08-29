import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useCategories } from "../../contexts/CategoryContext.jsx";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  CardActions,
  CircularProgress,
} from "@mui/material";

const ManageCategory = () => {
  const { categories, getCategories, addCategory, deleteCategory, loading } = useCategories();

  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    getCategories(); // fetch all categories when component mounts
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Category name is required!");

    await addCategory(formData);
    setFormData({ name: "", description: "" });
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* Back to Dashboard */}
      <Link to="/admin_dash" className="p-6">
        <HomeIcon sx={{ fontSize: 50, color: "black" }} />
      </Link>

      {/* Add Category Form */}
      <Card style={{ marginBottom: "2rem", padding: "1rem",paddingBottom:"3rem" }}>
        <Typography variant="h3" gutterBottom sx={{paddingBottom:"2rem"}}>
          Add New Category
        </Typography>
        <form onSubmit={handleAddCategory}>
          <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
            {/* Category Name */}
            <Grid size={{xs:12,sm:6,md:6}}>
              <TextField
                name="name"
                label="Category Name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
              <br></br>
              <br></br>

            {/* Submit */}
            <Grid size={{xs:12,md:12}}>
              <Button type="submit" variant="contained" color="primary">
                Add Category
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>

      {/* Category List */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {categories && categories.length > 0 ? (
            categories.map((cat) => (
              <Grid  size={{xs:12,sm:6,md:3}} key={cat._id}>
                <Card sx={{ maxWidth: 300, p: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{cat.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => deleteCategory(cat._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No categories available.</Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default ManageCategory;
