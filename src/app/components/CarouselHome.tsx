'use client';

import { useRouter } from 'next/navigation';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Grid, Typography } from '@mui/material';
import { IProduct } from '../../interface/product.interface';

interface ProductGridProps {
  title: string;
  products: IProduct[]
}


export default function CarouselHome({ title, products }: ProductGridProps) {
    const router = useRouter();

    const handleClick = (id: number) => {
      router.push(`/product/${id}`);
    };

    const chunkArray = (arr: IProduct[], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const productChunks = chunkArray(products, 4);
    
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
                style: {
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
                }}
            >
                {productChunks.map((chunk, index) => (
                    <Paper key={index} sx={{ padding: '20px' }} >
                        <Grid container spacing={2} justifyContent="center">
                        {chunk.map((product) => (
                            <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ cursor: 'pointer' }} onClick={() => handleClick(product.id)}>
                            <Paper sx={{ padding: '10px', textAlign: 'center' }}>
                                <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '150px', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
                                />
                                <Typography variant="h6">{product.name}</Typography>
                            </Paper>
                            </Grid>
                        ))}
                        </Grid>
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
}
