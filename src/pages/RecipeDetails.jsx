import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";

const recipeData = {
  1: {
    title: "Biryani",
    image: "https://i.pinimg.com/736x/c5/d2/62/c5d262f3377da91a7229772026a2ec5c.jpg",
    description: "A flavorful rice dish made with aromatic spices, basmati rice, and marinated meat.",
    ingredients: [
      "2 cups Basmati rice",
      "500g Chicken or Mutton",
      "2 Onions (sliced)",
      "2 Tomatoes (chopped)",
      "1 cup Yogurt",
      "1 tbsp Ginger-Garlic paste",
      "2 tbsp Biryani masala",
      "Saffron & Ghee"
    ],
    steps: [
      "Marinate the meat with yogurt, spices, and ginger-garlic paste for at least 1 hour.",
      "Cook the rice separately with whole spices.",
      "Fry onions until golden brown, then add tomatoes and cook.",
      "Add marinated meat and cook until tender.",
      "Layer the cooked meat and rice, add saffron-infused milk, and cook on low heat (dum) for 15 minutes.",
      "Serve hot with raita."
    ]
  },
  2: {
    title: "Chocolate Cake",
    image: "https://i.pinimg.com/736x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg",
    description: "A rich, moist chocolate cake layered with decadent chocolate ganache and fresh strawberries.",
    ingredients: [
      "2 cups All-purpose flour",
      "1 cup Cocoa powder",
      "1.5 cups Sugar",
      "1 tsp Baking soda",
      "1 tsp Baking powder",
      "1 cup Milk",
      "2 Eggs",
      "1/2 cup Butter",
      "Chocolate Ganache"
    ],
    steps: [
      "Preheat oven to 180°C and grease a baking tin.",
      "Mix flour, cocoa powder, sugar, baking soda, and baking powder.",
      "Add eggs, milk, and melted butter, and mix until smooth.",
      "Pour batter into the tin and bake for 30-35 minutes.",
      "Prepare chocolate ganache and spread over the cake.",
      "Decorate with strawberries and serve."
    ]
  },
  3: {
    title: "Sambar Rice",
    image: "https://i.pinimg.com/236x/44/01/79/44017970320ab9d7c089912b177e366c.jpg",
    description: "A traditional South Indian dish made with lentils, vegetables, and spices, served with rice.",
    ingredients: [
      "1 cup Toor dal (pigeon peas)",
      "1/2 cup Tamarind extract",
      "2 cups Mixed vegetables (carrot, beans, pumpkin, etc.)",
      "1 Tomato (chopped)",
      "1 Onion (sliced)",
      "2 tbsp Sambar powder",
      "1 tsp Mustard seeds",
      "Curry leaves",
      "2 Dry red chilies",
      "2 tbsp Ghee"
    ],
    steps: [
      "Pressure cook the toor dal until soft and mash it well.",
      "Boil the mixed vegetables until tender.",
      "In a pan, heat ghee, add mustard seeds, curry leaves, and dry red chilies.",
      "Add onions and tomatoes, sauté until soft.",
      "Pour in tamarind extract, cooked dal, and sambar powder. Simmer for 10 minutes.",
      "Add boiled vegetables and mix well.",
      "Serve hot with steamed rice and papad."
    ]
  },
  4: {
    title: "Ice Cream",
    image: "https://i.pinimg.com/474x/34/92/b9/3492b9e8f0983bf3dd019aa4fbe80f16.jpg",
    description: "A creamy homemade ice cream made with rich flavors and a smooth texture.",
    ingredients: [
      "2 cups Heavy cream",
      "1 cup Whole milk",
      "3/4 cup Sugar",
      "1 tbsp Vanilla extract",
      "1/2 cup Crushed Oreos (optional)",
      "Chocolate chips (optional)"
    ],
    steps: [
      "Whisk together heavy cream, milk, sugar, and vanilla extract until well combined.",
      "Pour the mixture into an ice cream maker and churn for 20-25 minutes.",
      "Add crushed Oreos or chocolate chips in the last 5 minutes of churning.",
      "Transfer to a container and freeze for at least 4 hours.",
      "Scoop and serve chilled."
    ]
  }
};

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <Typography variant="h4">Recipe Not Found</Typography>;
  }

  return (
    <Box
      sx={{
        width: "76vw", // Match Home Page width
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F1E3D3",
        color: "black",
        textAlign: "center",
        padding: "20px",
        margin: "0 auto", // Center horizontally
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Card sx={{ width: "100%", maxWidth: "900px" }}> {/* Limit max width for better readability */}
        <CardMedia component="img" height="500" image={recipe.image} alt={recipe.title}  />
        <CardContent>
          <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold" }} gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "'Roboto', sans-serif", textAlign: "justify" }} paragraph>
            {recipe.description}
          </Typography>

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2, fontFamily: "'Playfair Display', serif" }}>
            Ingredients:
          </Typography>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>
                <Typography variant="body1" sx={{ fontFamily: "'Roboto', sans-serif" }}>{item}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2, fontFamily: "'Playfair Display', serif" }}>
            Steps to Prepare:
          </Typography>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <Typography variant="body1" sx={{ fontFamily: "'Georgia', serif" }}>{step}</Typography>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecipeDetails;
