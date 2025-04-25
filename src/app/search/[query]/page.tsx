'use client';

import { Typography, 
  Box
} from '@mui/material';
import ProductGrid from '../../components/ProductGrid';
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';
//import { useState } from 'react';

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

  /*const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value.toLowerCase());
  };*/

  if (!filteredProducts.length) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom align="center">
          No se encontraron productos para &quot;{decodedQuery}&quot;
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center">
        Resultados de búsqueda para: {decodedQuery}
      </Typography>
      {/*<TextField
        label="Buscar productos"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 3 }}
      />*/}
      <ProductGrid products={filteredProducts} />
    </Box>
  );
}
