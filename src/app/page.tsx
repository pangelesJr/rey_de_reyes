'use client';

import { Box } from '@mui/material';
import CarouselHome from './components/CarouselHome'
import BannerCarousel from './components/BannerCarousel';
import bestSellingProducts from '../data/bestSellingProducts.json';
import newsProducts from '../data/newsProducts.json';
import productsWithOffer from '../data/productsWithOffer.json';

export default function Home() {
  return (
    <Box sx={{ marginTop: { xs: '-12px', sm: '-46px' }}}>
      <BannerCarousel />
      <Box style={{ marginTop: '12px' }}>
        <CarouselHome title='Más vendidos' products={bestSellingProducts} />
        <CarouselHome title='Novedades' products={newsProducts} />
        <CarouselHome title='Ofertas' products={productsWithOffer} />
      </Box>
    </Box>
  );
}
