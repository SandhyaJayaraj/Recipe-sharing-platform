import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

const AddRecipe = () => {
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [stepInput, setStepInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [dishImage, setDishImage] = useState(null);

  // React Flow Nodes & Edges
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setDishImage(imageURL);
    }
  };

  // Function to add a new step as a node
  const addStep = () => {
    if (!stepInput || !timeInput) return;

    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 200, y: nodes.length * 100 },
      data: { label: `${stepInput} (${timeInput} min)` },
      type: "default",
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);

    if (nodes.length > 0) {
      const newEdge = {
        id: `e${nodes.length}-${nodes.length + 1}`,
        source: (nodes.length).toString(),
        target: (nodes.length + 1).toString(),
      };
      setEdges((prevEdges) => [...prevEdges, newEdge]);
    }

    setStepInput("");
    setTimeInput("");
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        p: 3,
        background: "#2C2C2C",
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        mb={3}
        fontWeight="bold"
        color="white"
        fontFamily="Courier New, monospace"
      >
        Add Your Recipe
      </Typography>

      {/* Dish Name & Ingredients */}
      <Paper sx={{ p: 3, mb: 3, background: "#3A3A3A", borderRadius: 2 }}>
        <TextField
          fullWidth
          label="Dish Name"
          variant="outlined"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          sx={{ mb: 2, background: "#FCE7C8", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Ingredients (comma-separated)"
          variant="outlined"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          sx={{ mb: 2, background: "#FCE7C8", borderRadius: 1 }}
        />
      </Paper>

      {/* Image Upload */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          background: "#3A3A3A",
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2} color="white">
          Add Your Dish Photo
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="dish-image-upload"
          style={{ display: "none" }}
        />
        <label htmlFor="dish-image-upload">
          <Button
            variant="contained"
            component="span"
            sx={{
              backgroundColor: "#A27B5C",
              "&:hover": { backgroundColor: "#A06C7D" },
            }}
          >
            Upload Image
          </Button>
        </label>

        {/* Display Uploaded Image */}
        {dishImage && (
          <Box mt={2}>
            <img
              src={dishImage}
              alt="Dish"
              style={{
                width: "100%",
                maxHeight: 250,
                objectFit: "cover",
                borderRadius: 10,
                border: "3px solid #B5828C",
              }}
            />
          </Box>
        )}
      </Paper>

      {/* Steps Input */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          background: "#3A3A3A",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2} color="white">
          Cooking Steps
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Step Description"
            fullWidth
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
            sx={{ background: "#FCE7C8", borderRadius: 1 }}
          />
          <TextField
            label="Time (minutes)"
            type="number"
            sx={{ width: 120, background: "#FCE7C8", borderRadius: 1 }}
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          onClick={addStep}
          sx={{
            backgroundColor: "#A27B5C",
            "&:hover": { backgroundColor: "#A06C7D" },
          }}
        >
          Add Step
        </Button>
      </Paper>

      {/* Flowchart Display */}
      <Paper
        sx={{
          p: 3,
          background: "#3A3A3A",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2} color="white">
          Cooking Flowchart
        </Typography>
        <Box
          sx={{
            height: 300,
            background: "#252525",
            p: 2,
            borderRadius: 1,
            border: "2px solid #A27B5C",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default AddRecipe;
