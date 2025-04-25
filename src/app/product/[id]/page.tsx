"use client";

import { useEffect, useState } from 'react';
import { Typography, Button, Card, CardContent, CardMedia, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Icono de paquetería
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: IProduct | undefined = products.find((prod) => prod.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [productUrl, setProductUrl] = useState(''); // Estado para almacenar la URL del producto

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProductUrl(window.location.href); // Solo se ejecuta en el cliente
    }
  }, []);

  if (!product) {
    return <Typography variant="h4">Producto no encontrado</Typography>;
  }

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setQuantity(event.target.value as number);
  };

  // Cálculo del precio con descuento
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

        {/* Sección de imagen del producto (lado izquierdo) */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              width: '70%',            // Imagen con 70% del ancho
              height: '100%',          // Altura completa
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>

            {/* Precio con descuento */}
            {product.discount ? (
              <>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${discountedPrice.toFixed(2)}
                  <Typography variant="h6" sx={{ textDecoration: 'line-through', color: '#72767c', display: 'inline', mx: 1 }}>
                    ${product.price}
                  </Typography>
                </Typography>
              </>
            ) : (
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                ${product.price}
              </Typography>
            )}

            <Typography variant="body1" sx={{ mt: 2 }}>
              {product.description}
            </Typography>
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

            {/* Mensaje de envío con icono, ahora debajo del botón */}
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
