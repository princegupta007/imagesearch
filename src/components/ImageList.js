import React from 'react';
import ImageCard from './ImagesCard';
import Grid from '@mui/material/Grid';

const ImageList = ({ images, onImageClick }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageList;
