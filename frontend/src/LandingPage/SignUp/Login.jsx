import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const defaultTheme = createTheme();

function Login() {

  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();
  const [open, setOpen] = React.useState(false);

  const { handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      let result = await handleLogin(username, password);
      console.log(result);
      setOpen(true);
      setMessage(result);
    } catch (err) {
      console.log(err);
      let message = err.response?.data?.message || "Login failed!";
      setOpen(true);
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "80vh" }}>
        {/* Left Side - Image */}
        <Grid
          size={{xs:false,sm:6,md:6}}
          sx={{
            backgroundImage: "url(https://img.freepik.com/premium-photo/restaurant-food-restaurant-menu-photos-menu_830198-787.jpg)", // change to your image path
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>

        {/* Right Side - Login Form */}
        <Grid 
        size={{xs:false,sm:6,md:6}}
        component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <br></br>
            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
              LOGIN ACCOUNT
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                label="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{error}</p>
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for success/error */}
      <Snackbar open={open} autoHideDuration={4000} message={message || error} />
    </ThemeProvider>
  );
}

export default Login;
