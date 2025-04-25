// src/components/BannerCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [
    { 
        title: '¡Haz tu pedido por WhatsApp!', 
        description: 'Contáctanos para hacer tu pedido. ¡Ordena ahora y recibe un servicio personalizado!', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        src: '/images/flyer-banner-whasapp.png', 
        alt: 'Banner 1', 
        textButton: 'Ordenar por WhatsApp',
        link: 'https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.' 
    },
    {
        title: null, 
        description: null, 
        backgroundColor: null,
        src: '/images/flyer-banner.png',
        alt: 'Banner 2',
        textButton: null,
        link: null
    },
    {
        title: null, 
        description: null, 
        backgroundColor: null,
        src: '/images/flyer-banner.png',
        alt: 'Banner 3',
        textButton: null,
        link: null
    },
];

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <Box key={index} sx={{ position: 'relative', height: '60vh' }}>
                        <Box
                            sx={{
                            width: '100%',
                            height: '60vh',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: banner.backgroundColor || 'transparent',
                            color: 'white',
                            }}
                        >
                            <Image
                                src={banner.src}
                                alt={banner.alt}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                style={{ zIndex: -1 }}
                            />
                            <Typography variant="h2" align="center" sx={{ zIndex: 1, fontWeight: 'bold' }}>
                                {banner.title}
                            </Typography>
                            <Typography variant="h6" align="center" sx={{ zIndex: 1, marginTop: 2 }}>
                                {banner.description}
                            </Typography>
                            {banner.textButton && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ zIndex: 1, marginTop: 4 }}
                                    component="a"
                                    href={banner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image src="/images/path_to_whatsapp_icon.png" alt="WhatsApp" width={24} height={24} style={{ marginRight: 8 }} />
                                    {banner.textButton}
                                </Button>
                            )}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    </Box>
  );
};

export default BannerCarousel;
