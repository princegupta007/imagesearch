import React, { useState, useEffect } from 'react';
import { fetchImageDetails } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const ImageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImageDetails = async () => {
      try {
        const response = await fetchImageDetails(id);
        setImage(response.data);
      } catch (error) {
        console.error('Error fetching image details:', error);
      }
    };

    loadImageDetails();
  }, [id]);

  return (
    <Container>
      {image && (
        <>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={image.urls.regular}
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
          <Button variant="contained" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </>
      )}
    </Container>
  );
};

export default ImageDetails;
