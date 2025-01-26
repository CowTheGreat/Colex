import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: '2000+ Products',
      description: 'Explore our vast catalog featuring premium brands and the latest tech.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400'
    },
    {
      title: 'Top Brands',
      description: 'Shop from leading brands like Apple, Samsung, Sony, and more.',
      image: 'https://images.unsplash.com/photo-1515940175183-6798529cb860?w=400'
    },
    {
      title: 'Smart Search',
      description: 'Find exactly what you need with our advanced filtering system.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  letterSpacing: '-0.5px'
                }}
              >
                COLEX
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 300,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Your Ultimate Tech Product Intelligence Platform
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.8 }}
              >
                Access real-time data from thousands of tech products across multiple e-commerce platforms.
                Perfect for market research, price comparison, and trend analysis.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/products')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  backgroundColor: '#fff',
                  color: '#1a237e',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  }
                }}
              >
                Explore Products
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
                alt="Tech devices"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 8, fontWeight: 700 }}
        >
          Why Choose Colex?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;