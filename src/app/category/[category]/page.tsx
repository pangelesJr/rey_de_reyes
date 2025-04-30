import { Typography, Box } from '@mui/material';
import ProductGrid from '../../components/ProductGrid';
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;

  const categoryLabel: Record<string, string> = { 
    biblias: 'Biblias', 
    libros: 'Libros', 
    infantil: 'Infantil', 
    masvendidos: 'Más vendidos',
    novedades: 'Novedades',
    ofertas: 'Ofertas', 
  };

  // Convertir la primera letra de la categoría a mayúscula
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Filtrar productos por categoría
  const filteredProducts: IProduct[] = products.filter((product) =>
    //product.category.toLowerCase() === category.toLowerCase()
    product.category.split(',').some(cat => cat.toLowerCase() === category.toLowerCase())
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
          ¡Vaya! No encontramos productos en la categoría: {capitalizedCategory}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#888',
          }}
        >
          No te preocupes, puedes explorar otras categorías o buscar productos en la barra de búsqueda.
        </Typography>
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
        Productos en la categoría: <span style={{ color: '#1976d2' }}>{categoryLabel[category]}</span>
      </Typography>
      <ProductGrid products={filteredProducts} showPaginate={true}/>
    </Box>
  );
}
