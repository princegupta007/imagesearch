import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/api';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import CustomPagination from '../components/Pagination';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetchImages(query, page);
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Image Search
      </Typography>
      <SearchBar value={query} onChange={handleSearchChange} />
      <ImageList images={images} onImageClick={handleImageClick} />
      <CustomPagination page={page} onChange={handlePageChange} totalPages={totalPages} />
    </Container>
  );
};

export default Home;
