'use client';

import { Box } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';


export default function Layout({ children }) {

  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar/>
        <Box sx={{ marginTop: { xs: '90px', sm: '160px' }, paddingBottom: { xs: '90px', sm: '120px' }, flex: 1 }}> {/* Ajusta el margen superior y permite que el main ocupe el espacio restante */}
          <main>{children}</main>
        </Box>
        <Footer/>
        <WhatsAppButton />
      </body>
    </html>
  );
}
