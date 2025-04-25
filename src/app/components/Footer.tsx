import { Box, Typography, IconButton, List, ListItem, ListItemText, Grid, Container } from '@mui/material';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Footer() {

    return (
        <Box 
          component="footer" 
          sx={{ backgroundColor: '#2c3e50', color: 'white', py: 4 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Typography variant="h6" component="div" gutterBottom>
                  Librería Rey de Reyes
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: 300 }}>
                  Ofrecemos una gran variedad de Biblias, libros y artículos diversos para todas las edades. Nos apasiona ayudar a las personas a encontrar lo que necesitan para su crecimiento espiritual.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item>
                    <Typography variant="body2" align="center">
                      <AutoStoriesIcon sx={{ fontSize: 40, color: 'white' }} />
                      <br />
                      Inspiración
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" align="center">
                      <BookIcon sx={{ fontSize: 40, color: 'white' }} />
                      <br />
                      Conocimiento
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" align="center">
                      <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
                      <br />
                      Educación
                    </Typography>
                  </Grid>              
                </Grid>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h6" component="div" gutterBottom textAlign="center">
                  Enlaces útiles
                </Typography>
                <List sx={{ padding: 0, textAlign: 'center' }}>
                  {[
                    { href: "/category/novedades", label: "Maś vendidos" },
                    { href: "/category/novedades", label: "Novedades" },
                    { href: "/category/promociones", label: "Ofertas" },
                    { href: "/category/biblias", label: "Biblias" },
                    { href: "/category/libros", label: "Libros" },
                    { href: "/category/infantil", label: "Infantil" },
                    { href: "/howtobuy", label: "Cómo comprar" },
                    { href: "/category/preguntas", label: "Preguntas frecuentes" },
                  ].map((link, index) => (
                    <ListItem disablePadding key={index}>
                      <ListItemText>
                        <Link href={link.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {link.label}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" component="div" gutterBottom>
                  Contáctanos
                </Typography>                
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Teléfono: (+52) 55 2285 1074
                </Typography>                
                <Box>
                  <IconButton 
                    href="https://www.facebook.com/profile.php?id=61552164058644" 
                    target="_blank" 
                    rel="noopener" 
                    color="inherit"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    href="https://instagram.com/libreria_rey_de_reyes?igshid=YTQwZjQ0NmI0OA==" 
                    target="_blank" 
                    rel="noopener" 
                    color="inherit"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    href="https://wa.me/525522851074?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos." 
                    target="_blank" 
                    rel="noopener" 
                    color="inherit"
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
                <Typography sx={{ mt: 2 }} variant="body2">
                  Envíos a todo México <LocalShippingIcon sx={{ verticalAlign: 'middle', ml: 1 }} />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
    )
}
