import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import ImagePlaceholder from '../assets/placeholder.png';

const ImageCard = ({ image, onClick }) => {
  const [imgSrc, setImgSrc] = useState(image.urls.small);

  const handleError = () => {
    setImgSrc(ImagePlaceholder);
  };

  return (
    <Card onClick={() => onClick(image.id)}>
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={image.alt_description}
        onError={handleError}
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
