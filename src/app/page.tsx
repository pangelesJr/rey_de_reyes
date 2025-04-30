'use client';

import products from '../data/products.json';
import BannerCarousel from './components/BannerCarousel';
import ProductCarousel from './components/ProductCarousel';
import { Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const newsProducts = products.filter((product) => product.category.includes('novedades'));
  const productsWithOffer = products.filter((product) => product.category.includes('ofertas'));
  const bestSellingProducts = products.filter((product) => product.category.includes('masvendidos'));

  return (
    <>
      <Box>
        <BannerCarousel />
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Novedades</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ProductCarousel products={newsProducts.slice(0, isMobile ? 4 : 5)} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Button variant="text" component={Link} href="/category/novedades">
            Más...
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Más Vendidos</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ProductCarousel products={bestSellingProducts.slice(0, isMobile ? 4 : 5)} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Button variant="text" component={Link} href="/category/masvendidos">
            Más...
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Ofertas</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ProductCarousel products={productsWithOffer.slice(0, isMobile ? 4 : 5)} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Button variant="text" component={Link} href="/category/ofertas">
            Más...
          </Button>
        </Box>
      </Box>
    </>
  );
}
