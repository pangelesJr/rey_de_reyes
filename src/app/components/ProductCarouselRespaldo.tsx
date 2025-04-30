'use client';

import { useRouter } from 'next/navigation';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Grid, Typography } from '@mui/material';
import { IProduct } from '../../interface/product.interface';

interface ProductCarouselProps {
  title: string;
  products: IProduct[];
  itemsPerRow?: number; // default: 4
}

// Hook para dividir el arreglo en chunks
function useChunks<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size)
  );
}

// Card individual de producto
function ProductCard({ product, onClick }: { product: IProduct; onClick: () => void }) {
  return (
    <Grid item xs={12} sm={6} md={3} sx={{ cursor: 'pointer' }} onClick={onClick}>
      <Paper sx={{ padding: '10px', textAlign: 'center' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '150px',
            height: '200px',
            objectFit: 'cover',
            marginBottom: '10px',
          }}
        />
        <Typography variant="h6">{product.name}</Typography>
      </Paper>
    </Grid>
  );
}

// Componente principal del carrusel
export default function ProductCarousel({ title, products, itemsPerRow = 4 }: ProductCarouselProps) {
  const router = useRouter();
  const productChunks = useChunks(products, itemsPerRow);

  const handleClick = (id: number) => router.push(`/product/${id}`);

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={false}
        cycleNavigation={false}
        navButtonsWrapperProps={{
          style: { top: '50%', transform: 'translateY(-50%)' },
        }}
      >
        {productChunks.map((chunk, index) => (
          <Paper key={index} sx={{ padding: '20px' }}>
            <Grid container spacing={2} justifyContent="center">
              {chunk.map((product) => (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={12 / itemsPerRow}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleClick(product.id)}
                >
                  <ProductCard product={product} onClick={() => handleClick(product.id)} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}
