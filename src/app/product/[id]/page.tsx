"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'; // ✅ Importar el componente Image
import { Typography, Button, Card, CardContent, Grid, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: IProduct | undefined = products.find((prod) => prod.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [productUrl, setProductUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProductUrl(window.location.href);
    }
  }, []);

  if (!product) {
    return <Typography variant="h4">Producto no encontrado</Typography>;
  }

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(event.target.value as number);
  };

  const discountAmount = product.discount ? (Number(product.price) * (Number(product.discount) / 100)) : 0;
  const discountedPrice = Number(product.price) - discountAmount;
  const totalPrice = quantity * (product.discount ? discountedPrice : Number(product.price));

  const whatsappMessage = `Hola, me interesa este artículo...
    Producto: ${product.name}
    Precio del producto: $${product.price}${product.discount ? `\n    Precio con descuento: $${discountedPrice.toFixed(2)}` : ''} 
    Cantidad: ${quantity}
    Total: ${quantity} x $${product.discount ? discountedPrice.toFixed(2) : product.price} = $${totalPrice.toFixed(2)}
    Product url: ${productUrl}`;

  return (
    <Card sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            style={{ objectFit: 'contain' }}
          />
        </Grid>

        {/* Detalles del producto */}
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>

            {product.discount ? (
              <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${discountedPrice.toFixed(2)}
                </Typography>
                <Typography variant="h6" sx={{ textDecoration: 'line-through', color: '#72767c', display: 'inline', mx: 1 }}>
                    ${product.price}
                  </Typography>
              </Box>
            ) : (
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                ${product.price}
              </Typography>
            )}
            <Box sx={{ mt: 2 }}>
              {product.description.split('\n').map((line, index) => (
                <Typography key={index} variant="body1" component="p" sx={{ mb: 1 }}>
                  {line}
                </Typography>
              ))}
              {product.features && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Características:
                  </Typography>
                  <ul style={{ paddingLeft: 20 }}>
                    {Object.entries(product.features).map(([key, value]) => (
                      <li key={key}>
                        <Typography variant="body2">
                          <strong>{key}:</strong> {value}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="quantity-select-label">Cantidad</InputLabel>
              <Select
                labelId="quantity-select-label"
                value={quantity}
                label="Cantidad"
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5, 6].map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
              href={`https://wa.me/525522851074?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              startIcon={<WhatsAppIcon />}
            >
              Ordenar por WhatsApp
            </Button>

            <Typography variant="body2" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <LocalShippingIcon sx={{ mr: 1 }} />
              Envío a todo México
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}