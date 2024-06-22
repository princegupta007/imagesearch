import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ image, onClick }) => {
  return (
    <Card onClick={() => onClick(image.id)}>
      <CardMedia
        component="img"
        height="140"
        image={image.urls.small}
        alt={image.alt_description}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {image.alt_description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {image.description || 'No description available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
