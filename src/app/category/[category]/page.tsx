import { Typography, Box} from '@mui/material';
import ProductGrid from '../../components/ProductGrid';
import { IProduct } from '../../../interface/product.interface';
import products from '../../../data/products.json';


export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;

  // Filtrar productos por categoría
  const filteredProducts: IProduct[] = products.filter((product) =>
    product.category.toLowerCase() === category.toLowerCase()
  );

  if (!filteredProducts.length) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom align="center">
          No se encontraron productos en la categoría {category}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center">
        Productos en la categoría: {category}
      </Typography>
      <ProductGrid products={filteredProducts} />
    </Box>
  );
}
