'use client';

import { ReactNode } from 'react';
import { Box, Typography, Stack, IconButton, Link as MuiLink } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const showConstructionPage = false;

    if (showConstructionPage) {
      return (
        <html lang="es">
          <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', px: 2 }}>
              <Typography variant="h4" gutterBottom>
                Sitio en construcción 🛠️
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Estamos trabajando para brindarte una mejor experiencia. ¡Vuelve pronto!
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <IconButton
                  component={MuiLink}
                  href="https://www.facebook.com/profile.php?id=61552164058644"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component={MuiLink}
                  href="https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA=="
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Síguenos en redes sociales · Librería Rey de Reyes
              </Typography>
            </Box>
          </body>
        </html>
      );
    }


  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box
          sx={{
            marginTop: { xs: '70px', sm: '115px' },
            paddingBottom: { xs: '90px', sm: '120px' },
            flex: 1,
          }}
        >
          <main>{children}</main>
        </Box>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
