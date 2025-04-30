"use client";

import { useRouter } from 'next/navigation';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { IProduct } from '@/interface/product.interface';
import Image from 'next/image';

interface ProductCarouselProps {
  products: IProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const router = useRouter();

  const calculateDiscount = (product: IProduct) => {
    const discountAmount = product.discount !== 0 ? (Number(product.price) * (Number(product.discount) / 100)) : 0;
    return Number(product.price) - discountAmount;
  };

  const handleMoreDetails = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <Box
      sx={{
        display: { xs: 'grid', sm: 'flex' },
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'unset' },
        overflowX: { xs: 'unset', sm: 'auto' },
        gap: 3,
        padding: 2,
        justifyContent: 'center',
      }}
    >
      {products.map((product) => ( // Solo mostrar máximo 5 productos
        <Card
          key={product.id}
          sx={{
            minWidth: { xs: '100%', sm: 220 },
            maxWidth: { xs: '100%', sm: 250 },
            flex: { sm: '0 0 auto' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: 3,
            borderRadius: 3,
            '&:hover': { boxShadow: 6 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '180px', sm: '200px' },
              padding: 2,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleMoreDetails(product.id)}
          >
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {product.discount !== 0 && (
              <Chip
                label={`-${product.discount}%`}
                color="error"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontSize: { xs: '0.7rem', sm: '0.9rem' },
                  fontWeight: 'bold',
                  borderRadius: '90%',
                }}
              />
            )}
          </Box>

          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold" noWrap>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {product.autor}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 1 }}>
              {product.discount !== 0 ? (
                <>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: 'line-through', color: '#72767c', fontSize: '0.9rem' }}
                  >
                    ${product.price}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${calculateDiscount(product).toFixed(2)}
                  </Typography>
                </>
              ) : (
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
