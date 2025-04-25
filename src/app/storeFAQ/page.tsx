import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookIcon from '@mui/icons-material/Book';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import PaymentIcon from '@mui/icons-material/Payment';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const faqData = [
  {
    icon: <BookIcon />,
    question: '¿Qué tipo de libros cristianos ofrecen?',
    answer: (
      <Typography>
        En nuestra librería ofrecemos una amplia variedad de libros cristianos, incluyendo Biblias, libros de teología, devocionales, estudios bíblicos y mucho más. Tenemos opciones dirigidas a mujeres, varones, jóvenes, y diferentes ministerios, con el propósito de que cada persona pueda encontrar recursos espirituales adecuados a su necesidad.
      </Typography>
    )
  },
  {
    icon: <LocalShippingIcon />,
    question: '¿Realizan envíos a todo México?',
    answer: (
      <Typography>
        Sí, hacemos envíos a todo México. Para CDMX y Estado de México, el envío es gratis en compras a partir de $399 pesos. Si la compra es menor a esa cantidad, la entrega puede hacerse en un punto medio acordado. Para el resto del país, el envío es gratis en compras mayores a $999 pesos; si la compra es menor, el costo de envío dependerá del lugar de destino.
      </Typography>
    )
  },
  {
    icon: <SearchIcon />,
    question: '¿Qué hago si no encuentro la Biblia, libro u otro artículo que busco?',
    answer: (
      <Box>
        <Typography>
          Si no encuentras lo que buscas, ¡no te preocupes! Es probable que podamos conseguirlo para ti. Contáctanos por redes sociales o WhatsApp y con gusto te atenderemos de manera personalizada. Solo da clic en el ícono correspondiente y serás redirigido. ¡Estamos para ayudarte!
        </Typography>
        <Box sx={{ marginTop: '10px' }}>
          <Link href="https://www.facebook.com/profile.php?id=61552164058644" target="_blank">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA==" target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href="https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos." target="_blank">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    )
  },
  {
    icon: <ShoppingCartIcon />,
    question: '¿Cómo se compra?',
    answer: (
      <Typography>
        Navega por nuestras categorías o usa el buscador para encontrar lo que necesitas. Selecciona el producto, elige la cantidad y haz clic en "Ordenar por WhatsApp" para confirmar tu pedido y coordinar el pago y envío.
        Para más detalles, visita nuestra sección <Link href="/howtobuy" >Cómo Comprar</Link>.
      </Typography>
    )
  },
  {
    icon: <PaymentIcon />,
    question: '¿Qué métodos de pago aceptan?',
    answer: (
      <Typography>
        Para CDMX y Estado de México aceptamos transferencia, depósito o pago en efectivo. Para el resto del país, los métodos de pago disponibles son transferencia o depósito bancario.
      </Typography>
    )
  },
  {
    icon: <HelpOutlineIcon />,
    question: '¿Cómo puedo obtener más información sobre un producto?',
    //answer: 'Puedes contactarnos a través de nuestras redes sociales o vía WhatsApp para obtener más información sobre cualquier producto. Solo da clic en el ícono correspondiente y serás redirigido. ¡Estamos para ayudarte!',
    answer: (
      <Box>
        <Typography>
          Puedes contactarnos a través de nuestras redes sociales o vía WhatsApp para obtener más información sobre cualquier producto. Solo da clic en el ícono correspondiente y serás redirigido. ¡Estamos para ayudarte!
        </Typography>
        <Box sx={{ marginTop: '10px' }}>
          <Link href="https://www.facebook.com/profile.php?id=61552164058644" target="_blank">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA==" target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href="https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos." target="_blank">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    ),
  },
];

const FAQ = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Preguntas Frecuentes
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {faq.icon}
            <Typography sx={{ ml: 2 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;