import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./bg.jpg";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box className="home-container">
      <Typography variant="h2" className="home-title">
        Welcome to the Recipe Sharing Platform!
      </Typography>
      <br></br>

      <Typography variant="h5" className="home-subtitle">
        Share, explore, and create amazing recipes from around the world.
      </Typography>
      <br></br>

      <Button className="home-button" onClick={() => navigate("/add-recipe")}>
        Add Your Recipe
      </Button>
    </Box>
  );
};

export default Home;
