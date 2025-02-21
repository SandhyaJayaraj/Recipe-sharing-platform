import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, CardMedia, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes([
      { id: 1, title: "Briyani", image: "https://i.pinimg.com/736x/c5/d2/62/c5d262f3377da91a7229772026a2ec5c.jpg" },
      { id: 2, title: "Chocolate Cake", image: "https://i.pinimg.com/736x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg" },
      { id: 3, title: "Sambar rice", image: "https://i.pinimg.com/236x/ee/9b/bb/ee9bbb1777677f0b6888ed32fabd0460.jpg" },
      { id: 4, title: "Ice Cream", image: "https://i.pinimg.com/736x/b1/b0/c8/b1b0c89d4291bfb089d415c4e7c59931.jpg" }
    ]);
  }, []);

  return (
    <Container sx={{ mt: 1, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: "bold" }}>
        Recipes
      </Typography>
      <br></br>
      <Grid container spacing={5} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <Card sx={{ maxWidth: 500, width: "100%", mx: "auto", boxShadow: 3, display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="300"
                width="200"
                image={recipe.image}
                alt={recipe.title}
                sx={{ objectFit: "cover", backgroundColor: "#fff" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: "bold" }}>
                  {recipe.title}
                </Typography>
                <Box mt="auto">
                <Button 
  component={Link} 
  to={`/recipes/${recipe.id}`} 
  variant="contained" 
  sx={{
    backgroundColor: "#A27B5C", // Default button color
    color: "white",  // Default text color
    "&:hover": {
      backgroundColor: "#9A6B75", // Darker shade for hover effect
      color: "#fff", // Ensures text stays white (or change to another color)
    }
  }}
>
  View Recipe
</Button>

                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
