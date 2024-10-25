import React, { useContext, useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ThemeContext from '../providers/theme/ThemeContext';

const Add = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { dark } = useContext(ThemeContext);

  const fetchImage = () => {
    const randomSeed = Date.now(); 
    fetch(`https://picsum.photos/seed/${randomSeed}/600/280`)
      .then(response => setImageUrl(response.url))
      .catch(err => console.error('Error fetching image:', err));
  };

  useEffect(() => {
    fetchImage(); 
  }, []);

  return (
    <Card 
      className="addBox" 
      sx={{ 
        borderRadius: "0px", 
        backgroundColor: dark ? "black" : "white", 
        color: dark ? "white" : "black" 
      }}>
      <CardMedia
        component="img"
        alt="Advertisement"
        height="230"
        image={imageUrl}
      />
     
      <Button 
        variant="contained" 
        
        onClick={fetchImage} 
        sx={{ margin: 2 ,
          borderRadius : 0,
          width:450, 
          backgroundColor : dark ? "grey" : "red",
          color : dark ? "black" : "white",
        }}>
        Not Interested
      </Button>
    </Card>
  );
};

export default Add;
