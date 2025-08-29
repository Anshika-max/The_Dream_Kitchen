import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


function AboutHero() {
   return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fafafa",
        p: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "16px",
          maxWidth: "1200px",
          width: "100%",
          bgcolor: "white",
        }}
      >
        <Grid container spacing={4} alignItems="center">

          {/* Right side content */}
          <Grid
          size={{xs:12, md:12}}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8,mx:15,my:8 }}>
              Welcome to <b>THE DREAM KITCHEN</b>! We are passionate about
              baking fresh, delicious treats that bring joy to your day. From
              salad to continental, everything is made with love, the finest
              ingredients, and a touch of flavour.

              Our mission is simple – to create memorable experiences through
              every bite. Whether you're here for a quick snack or to order a
              custom cake for your special occasion, we've got you covered.
              <br></br>
              <br></br>
              At <b>THE DREAM KITCHEN</b>, food is not just something we serve – it’s a celebration of culture, family, and togetherness. Established with a vision to bring authentic flavors and heartfelt hospitality under one roof, we have grown into a place where every guest feels like part of our family.
            <br></br>
            <br></br>
Our chefs carefully select the freshest ingredients, blending traditional recipes with modern creativity. From aromatic starters to hearty mains and indulgent desserts, every dish is thoughtfully prepared to please both the eyes and the taste buds.

But we believe a restaurant is more than just food. It’s the experience. That’s why we’ve created a warm, inviting space where laughter is shared, stories are told, and lasting     memories are made.
            <br></br>
            <br></br>

            </Typography>
    <Card sx={{ maxWidth: 600,ml:30 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
            image="https://images.squarespace-cdn.com/content/v1/624510013484ae57c8837155/fb705749-83bd-417a-a242-4788a621f19a/lunch-specials-and-business-lunch-downtown-vancouver-bc-at-archer-restaurant-alberni.jpg"
        />
      </CardActionArea>
    </Card>
            <Link to={"/menu"}>
            <br></br>
                   <button style={{width:"20%",margin:"0 auto",backgroundColor:"#387ed1"}} className='fs-5 p-2 btn btn-primary'>Order Online</button> 
                </Link>
          </Grid>
           
        </Grid>
      </Paper>
    </Box>
  );
}

export default AboutHero;
