'use client';

import { Typography, Box, IconButton } from '@mui/material';
import ProductGrid from '../../components/ProductGrid';
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function SearchResults({ params }: { params: { query: string } }) {
  const removeAccents = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const decodedQuery = decodeURIComponent(params.query || '').replace(/-/g, ' ');
  const normalizedQuery = removeAccents(decodedQuery.toLowerCase());

  const filteredProducts: IProduct[] = products.filter((product) =>
    removeAccents(product.name.toLowerCase()).includes(normalizedQuery) ||
    removeAccents(product.category.toLowerCase()).includes(normalizedQuery) ||
    product.keywords.some((keyword: string) =>
      removeAccents(keyword.toLowerCase()).includes(normalizedQuery)
    )
  );

  if (!filteredProducts.length) {
    return (
      <Box sx={{ padding: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            color: '#666',
          }}
        >
          Lo sentimos, no encontramos productos para &quot;{decodedQuery}&quot;
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#888',
          }}
        >
          Intenta con otras palabras clave o explora nuestras categorías.
        </Typography>
        <Box>
          <Typography
            variant="body2"
            align="center"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem' },
              color: '#888',
              marginTop: 2,
            }}
          >
            Si no encuentras lo que buscas, ¡no te preocupes! Podemos conseguirlo para ti. Contáctanos por nuestras redes sociales o WhatsApp. Solo haz clic en el ícono correspondiente y serás redirigido.
          </Typography>
          <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.facebook.com/profile.php?id=61552164058644" target="_blank">
              <IconButton sx={{ margin: 1 }}>
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA==" target="_blank">
              <IconButton sx={{ margin: 1 }}>
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href="https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos." target="_blank">
              <IconButton sx={{ margin: 1 }}>
                <WhatsAppIcon />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.5rem', sm: '1.75rem' },
          color: '#333',
        }}
      >
        Resultados de búsqueda para:
        <span style={{ color: '#1976d2' }}> {decodedQuery}</span>
      </Typography>
      <ProductGrid products={filteredProducts} showPaginate={true}/>
    </Box>
  );
}
