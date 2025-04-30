'use client';

import products from '../data/products.json';
import BannerCarousel from './components/BannerCarousel';
import ProductGrid from './components/ProductGrid';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Agrega este import

export default function Home() {
  const newsProducts = products.filter((product) => product.category.includes('novedades'));
  const productsWithOffer = products.filter((product) => product.category.includes('ofertas'));
  const bestSellingProducts = products.filter((product) => product.category.includes('masvendidos'));

  return (
    <>
      <Box>
        <BannerCarousel />
      </Box>

      {/* Novedades */}
      <Box sx={{ mt: 8, px: 2 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: '1.6rem' }}
        >
          Novedades
        </Typography>
        <ProductGrid products={newsProducts.slice(0, 4)} showPaginate={false} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button 
            variant="outlined" 
            endIcon={<ArrowForwardIcon />} 
            component={Link} 
            href="/category/novedades"
          >
            Ver más
          </Button>
        </Box>
      </Box>

      {/* Más vendidos */}
      <Box sx={{ mt: 8, px: 2 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: '1.6rem' }}
        >
          Más vendidos
        </Typography>
        <ProductGrid products={bestSellingProducts.slice(0, 4)} showPaginate={false} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button 
            variant="outlined" 
            endIcon={<ArrowForwardIcon />} 
            component={Link} 
            href="/category/masvendidos"
          >
            Ver más
          </Button>
        </Box>
      </Box>

      {/* Ofertas */}
      <Box sx={{ mt: 8, px: 2 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: '1.6rem' }}
        >
          Ofertas
        </Typography>
        <ProductGrid products={productsWithOffer.slice(0, 4)} showPaginate={false} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button 
            variant="outlined" 
            endIcon={<ArrowForwardIcon />} 
            component={Link} 
            href="/category/ofertas"
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </>
  );
}
