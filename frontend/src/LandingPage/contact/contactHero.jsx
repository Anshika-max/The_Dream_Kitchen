import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function ContactHero() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8,bgColor:"#cf8a8aff" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out.
        </Typography>
      </Box>

        <Grid  size={{xs:12, md:12}}>
          <Card sx={{ height: "100%", p: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Get In Touch
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                📍 Address: 123 Food Street, Flavor Town, Lucknow
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                📞 Phone: +91 98765 43210
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                ✉️ Email: info@dreamkitchen.com
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                We’re open every day from <b>10:00 AM – 11:00 PM</b>.
              </Typography>
            </CardContent>
          </Card>
        </Grid>       
      
    </Container>
  );
}

export default ContactHero;
