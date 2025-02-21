import { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import smokyImage from "../pages/smoky1.jpg";




const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing up:", name, email, password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width:"76vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${smokyImage})`, // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
  
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: 400,
          backgroundImage: `url(${smokyImage})`, // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="white"
          mb={3}
          fontFamily="Courier New, monospace"
        >
          Sign Up
        </Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#A27B5C" },
              "&:hover fieldset": { borderColor: "#8B6751" },
              "&.Mui-focused fieldset": { borderColor: "#A27B5C" },
            },
          }}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#A27B5C" },
              "&:hover fieldset": { borderColor: "#8B6751" },
              "&.Mui-focused fieldset": { borderColor: "#A27B5C" },
            },
          }}
        />

        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#A27B5C" },
              "&:hover fieldset": { borderColor: "#8B6751" },
              "&.Mui-focused fieldset": { borderColor: "#A27B5C" },
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignup}
          sx={{
            mt: 2,
            backgroundColor: "#A27B5C",
            "&:hover": { backgroundColor: "#8B6751" },
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default Signup;
