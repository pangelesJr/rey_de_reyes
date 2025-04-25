'use client';

import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography, Button, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const steps = [
  { label: 'Explorar el catálogo', icon: (active) => <SearchIcon sx={{ fontSize: 30, color: active ? '#3f51b5' : 'inherit' }} /> }, // Azul
  { label: 'Seleccionar el producto', icon: (active) => <InfoIcon sx={{ fontSize: 30, color: active ? '#2196f3' : 'inherit' }} /> },  // Azul Claro
  { label: 'Elegir la cantidad', icon: (active) => <ShoppingCartIcon sx={{ fontSize: 30, color: active ? '#f57c00' : 'inherit' }} /> }, // Naranja
  { label: 'Ordenar por WhatsApp', icon: (active) => <WhatsAppIcon sx={{ fontSize: 30, color: active ? '#4caf50' : 'inherit' }} /> },  // Verde
  { label: 'Finalizar la compra por WhatsApp', icon: (active) => <PaymentIcon sx={{ fontSize: 30, color: active ? '#1f5ef9' : 'inherit' }} /> },  // Naranja fuerte
  { label: 'Envíos a todo México', icon: (active) => <LocalShippingIcon sx={{ fontSize: 30, color: active ? '#f91f5e' : 'inherit' }} /> },  // Morado
];

export default function HowToBuy() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: { xs: '20px', sm: '40px'}}}>
        Cómo comprar
      </Typography>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start'} }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon(index === activeStep)}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3, mb: 2 }}>
        {activeStep === 0 && (
          <Typography>
            Navega por nuestras categorías como Biblias, Libros, Infantil, etc., o utiliza el buscador para encontrar el artículo que te interesa.
          </Typography>
        )}
        {activeStep === 1 && (
          <Typography>
            Haz clic en el producto de tu interés para ver más detalles, como la descripción y el precio.
          </Typography>
        )}
        {activeStep === 2 && (
          <Typography>
            En la página del producto, selecciona la cantidad de unidades que necesitas.
          </Typography>
        )}
        {activeStep === 3 && (
          <Typography>
            Haz clic en el botón "Ordenar por WhatsApp" y serás redirigido con un mensaje prellenado con el nombre del producto, la cantidad y el total.
          </Typography>
        )}
        {activeStep === 4 && (
          <Typography>
            A través de WhatsApp, confirma tu pedido y recibirás instrucciones para el pago y el envío.
          </Typography>
        )}
        {activeStep === 5 && (
          <Typography>
            Realizamos envíos a todo México, y coordinaremos los detalles del envío durante la conversación en WhatsApp.
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
          color="primary"
        >
          Atrás
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          variant="contained"
          color="primary"
        >
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Box>
    </Container>
  );
}
