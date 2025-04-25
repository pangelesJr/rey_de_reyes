import { Box, AppBar, Toolbar, Typography, InputBase, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'; 
import Image from 'next/image';

export default function Navbar() {

    const [searchQuery, setSearchQuery] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearchQuery('');
        const formattedQuery = searchQuery.trim().replace(/\s+/g, '-');
        router.push(`/search/${formattedQuery}`);
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
        return;
        }
        setDrawerOpen(open);
    };

    const menuItems = (
        <List>
        <ListItem component="a" href="/">
            <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem component="a" href="/category/biblias">
            <ListItemText primary="Biblias" />
        </ListItem>
        <ListItem component="a" href="/category/libros">
            <ListItemText primary="Libros" />
        </ListItem>
        <ListItem component="a" href="/category/infantil">
            <ListItemText primary="Infantil" />
        </ListItem>
        <ListItem component="a" href="/howtobuy">
            <ListItemText primary="Cómo comprar" />
        </ListItem>
        <ListItem component="a" href="/storeFAQ">
            <ListItemText primary="Preguntas frecuentes" />
        </ListItem>
        </List>
    );

    return (
        <div>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#2c3e50' }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1200px' }}>
                    <Typography variant="h6" component="div" sx={{ flexShrink: 0 }}>
                        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Image 
                            src="/images/logo-libreria.png" 
                            alt="logo-libreria" 
                            width={180} 
                            height={40}
                            style={{ marginTop: '28px' }}
                        />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%', maxWidth: '900px' }}>
                        <InputBase
                            placeholder="Buscar..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{
                            color: 'inherit',
                            borderBottom: '1px solid white',
                            padding: '0 10px',
                            flexGrow: 1,
                            }}
                        />
                        <IconButton type="submit" color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        </form>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                        </IconButton>
                    </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    <Button color="inherit">
                        <Link href="/" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Inicio
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/category/biblias" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Biblias
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/category/libros" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Libros
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/category/infantil" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Infantil
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/howtobuy" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Cómo comprar
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/storeFAQ" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                            Preguntas frecuentes
                        </Link>
                    </Button>
                    </Box>           
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ zIndex: 1900 }} // Ajusta el zIndex
                >
                {menuItems}
            </Drawer>
        </div>
    )
}
