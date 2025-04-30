"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Card, CardContent, Button, Typography, Box, Chip, Pagination } from '@mui/material';
import { IProduct } from '../../interface/product.interface';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface ProductGridProps {
  products: IProduct[];
  showPaginate: boolean;
}

export default function ProductGrid({ products, showPaginate = true }: ProductGridProps) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta si es móvil

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20); // Inicializamos en 20

  // Ajuste dinámico en función del tamaño de la pantalla
  useEffect(() => {
    setItemsPerPage(isMobile ? 10 : 20); // 10 en móvil, 20 en pantallas más grandes
  }, [isMobile]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMoreDetails = (id: number) => {
    router.push(`/product/${id}`);
  };

  const calculateDiscount = (product: IProduct) => {
    const discountAmount = product.discount !== 0 ? (Number(product.price) * (Number(product.discount) / 100)) : 0;
    return Number(product.price) - discountAmount;
  };

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        <Grid container spacing={4} justifyContent="center">
          {paginatedProducts.map((product) => (
            <Grid item xs={6} sm={6} md={3} key={product.id}>
              <Card sx={{ position: 'relative', height: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '200px', sm: '250px', md: '300px' },
                    padding: 2,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleMoreDetails(product.id)}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}
                  >
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
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        fontWeight: 'bold',
                        borderRadius: '90%',
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                    {product.autor}
                  </Typography>

                  <Box
                    sx={{
                      mt: 1,
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { sm: 'center' },
                    }}
                  >
                    {product.discount !== 0 ? (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            textDecoration: 'line-through',
                            color: '#72767c',
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            marginRight: { sm: 1 },
                          }}
                        >
                          ${product.price}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                          ${calculateDiscount(product).toFixed(2)}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="h6" color="primary" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        ${product.price}
                      </Typography>
                    )}
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    href={`/product/${product.id}`}
                    fullWidth
                    sx={{ mt: 2, fontSize: { xs: '0.7rem', sm: '0.875rem' }, padding: { xs: '4px', sm: '6px' } }}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {showPaginate && (
        <Box sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}
