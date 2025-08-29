import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../contexts/AuthContext.jsx';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

function SignUp() {

    const [name,setName] = React.useState("");
    const [username,setUsername] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [location,setLocation] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();

    const [open, setOpen] = React.useState(false)

    const { handleRegister } = React.useContext(AuthContext);

    let handleAuth = async()=>{
      try
      {
      let result = await handleRegister(name,username,email,location,password);
      console.log("Registration Success:", message);
      setName("");
      setUsername("");
      setEmail("");
      setLocation("");
      setPassword("")
      setOpen(true);
      setMessage(result);
      }
      catch(err)
      {
        console.error("Registration failed:", err.response?.data || err.message);
        let message = (err.response.data.message);
        setOpen(true)
        setError(message);
      }
    }


  return(
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minheight: "100vh" }}>
        {/* Left Side - Image */}
        <Grid
          size={{xs:false,sm:6,md:6}}
          sx={{
            backgroundImage: "url(https://m.media-amazon.com/images/I/81U6-9Mx2bL._UF1000,1000_QL80_.jpg)", // change to your image path
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
              SIGNUP ACCOUNT
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}

      />
    <TextField 
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="location"
        label="Location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    <TextField 
        margin="normal"
        required
        fullWidth
        type="password"
        label="password"
        name="password"
        value={password}
        id="password"
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
    SignUp                     
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

export default SignUp;
