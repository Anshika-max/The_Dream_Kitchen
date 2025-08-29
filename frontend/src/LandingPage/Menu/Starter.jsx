import React from "react";
import {  Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Container,
  styled,
} from "@mui/material";
import { useCart } from "../../contexts/CartContext.jsx";
const menuItems = [
  { id: 1, name: "Momo", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhrelgj2VUN-uTrk46aiy9wX3QDjLi-bDBA&s" },
  { id: 2, name: "Paneer Tikka", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vdLJ3ta70PubbLLzkhOoSNNIa-CmijHeiA&s" },
  { id: 3, name: "Spring Roll", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTPK4RBgcjaYZe7l9jpyQdGZsWSOox21j4Q&s" },
];

function Starter() {
  const { addToCart } = useCart();

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        Our Menu
      </Typography>

      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid size={{xs:12,sm:6,md:4}} key={item.id}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="200" image={item.image} alt={item.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5">{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Price: ₹{item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{alignItems:"center",ml:15}}>
                <Link to={"/order"}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => addToCart(item)
                  }
                >
                  Buy Now
                </Button></Link>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Starter;
