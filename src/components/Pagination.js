import React from 'react';
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ page, onChange, totalPages }) => {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
      color="primary"
      sx={{ mt: 2 }}
    />
  );
};

export default CustomPagination;
