'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


import { Box, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import type { ButtonProps } from '@mui/material';

type BannerButton = {
  text: string;
  link: string;
  icon?: string;
  variant: ButtonProps['variant'];
  color: string;
};

const banners: {
  title: string | null;
  description: string | null;
  backgroundColor: string | null;
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  buttons: BannerButton[];
}[] = [
  {
    title: '¡Haz tu pedido por WhatsApp!',
    description: 'Contáctanos para hacer tu pedido. ¡Ordena ahora y recibe un servicio personalizado!',
    backgroundColor: null,
    srcDesktop: '/images/flyer-whatsapp-descktop.png',
    srcMobile: '/images/flyer-whatsapp-mobile.png',
    alt: 'Banner 1',
    buttons: [
      {
        text: 'Ordenar por WhatsApp',
        link: 'https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.',
        icon: '/images/path_to_whatsapp_icon.png',
        variant: 'contained',
        color: 'primary',
      }
    ]
  },
  {
    title: null,
    description: null,
    backgroundColor: null,
    srcDesktop: '/images/flyer-redes-desktop.png',
    srcMobile: '/images/flyer-redes-mobile.png',
    alt: 'Banner 2',
    buttons: [
        {
            text: 'Facebook',
            link: 'https://www.facebook.com/profile.php?id=61552164058644',
            icon: 'facebook',
            variant: 'contained',
            color: '#3d5a98'
        },
        {
            text: 'Instagram',
            link: 'https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA==',
            icon: 'instagram',
            variant: 'contained',
            color: '#e83461'
        }
    ]      
  },
  {
    title: null,
    description: null,
    backgroundColor: null,
    srcDesktop: '/images/flyer-envios-desktop.png',
    srcMobile: '/images/flyer-envios-mobile.png',
    alt: 'Banner 3',
    buttons: [],
  }
];
  

const BannerCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderButtonIcon = (icon: string | null) => {
    if (!icon) return null;
  
    switch (icon) {
      case 'facebook':
        return <FacebookIcon sx={{ marginRight: 1 }} />;
      case 'instagram':
        return <InstagramIcon sx={{ marginRight: 1 }} />;
      default:
        return (
          <Image
            src={icon}
            alt="button icon"
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
        );
    }
  };  

  return (
    <Box sx={{ width: '100%', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      {/* Botón anterior */}
      <IconButton
        className="swiper-button-prev-1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          zIndex: 10,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
          transform: 'translateY(-50%)'
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Botón siguiente */}
      <IconButton
        className="swiper-button-next-1"
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          zIndex: 10,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
          transform: 'translateY(-50%)'
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Carrusel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 20000 }}
        loop
        style={{ width: '100%', height: '100%' }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: 'relative', height: { xs: '60vh', md: '60vh' } }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: banner.backgroundColor || 'transparent',
                  color: 'white'
                }}
              >
                <Image
                    src={isMobile && banner.srcMobile ? banner.srcMobile : banner.srcDesktop}
                    alt={banner.alt}
                    fill
                    style={{
                        objectFit: isMobile ? 'contain' : 'cover',
                        zIndex: -1
                    }}
                    priority
                />
                {banner.title && (
                  <Typography variant="h2" align="center" sx={{ zIndex: 1, fontWeight: 'bold' }}>
                    {banner.title}
                  </Typography>
                )}
                {banner.description && (
                  <Typography variant="h6" align="center" sx={{ zIndex: 1, marginTop: 2 }}>
                    {banner.description}
                  </Typography>
                )}
                
                {banner.buttons?.map((button, idx) => (
                    <Button
                        key={idx}
                        variant={button.variant}
                        sx={{ zIndex: 1, marginTop: 2, color: 'white', backgroundColor: button.color }}
                        component="a"
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {button.icon && (
                            renderButtonIcon(button.icon)
                        )}
                        {button.text}
                    </Button>
                ))}

              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerCarousel;
