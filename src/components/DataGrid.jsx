import { useState } from 'react';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Pagination, Typography } from '@mui/material';

const ITEMS_PER_PAGE = 50;

const DataGrid = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentPageData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1 }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            label="Category"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Appliances">Appliances</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing {currentPageData.length} of {filteredData.length} items
      </Typography>

      {currentPageData.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: 2,
            mb: 2,
            border: '1px solid #eee',
            borderRadius: 1,
            backgroundColor: 'white',
            '&:hover': {
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            },
          }}
        >
          <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
            <Box
              sx={{
                width: 200,
                height: 150,
                flexShrink: 0,
                overflow: 'hidden',
                borderRadius: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2">Product Details</Typography>
              <Typography variant="body2">Price: ${item.price}</Typography>
              <Typography variant="body2">Rating: {item.rating}⭐</Typography>
              <Typography variant="body2">Category: {item.category}</Typography>
              <Typography variant="body2">{item.inStock ? '✅ In Stock' : '❌ Out of Stock'}</Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2">Shipping & Seller</Typography>
              <Typography variant="body2">Seller: {item.seller}</Typography>
              <Typography variant="body2">Shipping Time: {item.shippingTime}</Typography>
              <Typography variant="body2">Origin: {item.origin}</Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2">Specifications</Typography>
              <Typography variant="body2">SKU: {item.sku}</Typography>
              <Typography variant="body2">Weight: {item.weight}</Typography>
              <Typography variant="body2">Dimensions: {item.dimensions}</Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2">Additional Info</Typography>
              <Typography variant="body2">Manufacturer: {item.manufacturer}</Typography>
              <Typography variant="body2">Warranty: {item.warranty}</Typography>
              <Typography variant="body2">Added: {new Date(item.dateAdded).toLocaleDateString()}</Typography>
              <Typography variant="body2">Updated: {new Date(item.lastUpdated).toLocaleDateString()}</Typography>
            </Box>
          </Box>
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
        <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
};

export default DataGrid;