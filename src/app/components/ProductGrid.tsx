"use client";

import { useRouter } from 'next/navigation';
import { Grid, Card, CardContent, Button, Typography, Box, Chip } from '@mui/material';
import { IProduct } from '../../interface/product.interface';
import Image from 'next/image';

interface ProductGridProps {
  products: IProduct[];
}

export default function ProductGrid({ products }: ProductGridProps) {

  const router = useRouter();

  const handleMoreDetails = (id: number) => {
    router.push(`/product/${id}`); // Redirige a la página del producto con el id correspondiente
  };

  const calculateDiscount = (product: IProduct) => {
    const discountAmount = product.discount != 0 ? (Number(product.price) * (Number(product.discount) / 100)) : 0;
    return Number(product.price) - discountAmount;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Grid 
        container 
        spacing={4} 
        justifyContent="center" 
        sx={{ width: { xs: '90%', sm: '80%', md: '70%' } }} 
      >
        {products.map((product) => (
          <Grid item xs={6} sm={6} md={3} key={product.id}>
            <Card sx={{ position: 'relative' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',  // Hacer relativo para posicionar el Chip de descuento
                }}
                onClick={() => handleMoreDetails(product.id)}
              >
                <div style={{ position: 'relative', width: '70%', height: '300px' }}>
                  <Image
                    src="/images/books/71NZCKB-F9L._SL1500_.jpg"
                    alt={product.name}
                    layout="fill" // ocupa todo el contenedor padre
                    objectFit="contain"
                  />
                </div>
                {product.discount != 0 && (
                  <Chip
                    label={`-${product.discount}%`}
                    color="error"
                    sx={{
                      position: 'absolute',    // Posiciona el Chip sobre la imagen
                      top: 0,                // Separación desde la parte superior
                      left: 0,
                      fontSize: { xs: '0.8rem', sm: '1rem' },  // Tamaño del botón más pequeño en móviles
                      padding: { xs: '0px', sm: '0px' },
                      fontWeight: 'bold',
                      borderRadius: '90%',
                    }}
                  />
                )}
              </Box>
              
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '1rem' }  // Ajustar tamaño del autor
                  }}
                >
                  {product.autor}
                </Typography>

                {/* Precio con descuento */}
                <>
                  <Box
                    sx={{
                      mt: 1,
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' }, // En pantallas chicas (xs) se apilan, en pantallas más grandes (sm) se alinean en fila
                      alignItems: { sm: 'center' },  // Alineación vertical en pantallas grandes
                    }}
                  >
                    {product.discount != 0 ? (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            textDecoration: 'line-through',
                            color: '#72767c',
                            display: 'inline',
                            fontSize: { xs: '0.9rem', sm: '1rem' }, // Tamaño del precio tachado
                            marginRight: { sm: 1 },  // Margen derecho en pantallas grandes para separarlo del precio con descuento
                          }}
                        >
                          ${product.price}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem' },  // Ajustar tamaño del precio con descuento
                          }}
                        >
                          ${calculateDiscount(product).toFixed(2)}
                        </Typography>
                      </>
                    ) : (
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}  // Tamaño del precio sin descuento
                      >
                        ${product.price}
                      </Typography>
                    )}
                  </Box>
                </>
              
                <Button
                  variant="contained"
                  color="primary"
                  href={`/product/${product.id}`}
                  fullWidth
                  sx={{
                    mt: 2,
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },  // Tamaño del botón más pequeño en móviles
                    padding: { xs: '4px', sm: '6px' }  // Ajuste del padding para el botón
                  }}
                >
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
