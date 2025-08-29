import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useCategories } from "../../contexts/CategoryContext.jsx";

function MenuHero() {
  const { categories, getCategories } = useCategories();
    useEffect(() => {
      getCategories(); // fetch all categories when component mounts
    }, []);
  return (
    <>
       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        Select Category
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {categories.map((cat) => (
          <Grid key={cat._id} size={{xs:12,sm:12,md:12}} sx={{display:"flex",justifyContent:"center"}}>
            <Card sx={{ width:"20rem",backgroundColor:"#387ed1",color:"white" }}>
              <CardActionArea component={Link} to={`/menu/${cat._id}`}>
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    {cat.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}

export default MenuHero;
