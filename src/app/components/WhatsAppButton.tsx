import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  
  return (
    <IconButton
      href="https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
      target="_blank"
      sx={{
        position: 'fixed',
        bottom: 16, 
        right: 16, 
        backgroundColor: '#25D366',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        '&:hover': {
          backgroundColor: '#128C7E',
        },
        zIndex: 1000 
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
};

export default WhatsAppButton;

