import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AirlineStops, KeyboardArrowDown, MiscellaneousServices, Receipt } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';

const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const generalSubmenu = [
    { label: 'Zona Horaria' },
    { label: 'Parámetros del Recibo' },
    { label: 'Parámetros de la Factura' },
    { label: 'Destinatarios de correo de Ventas' },
    { label: 'Envío de Ventas a XONE' },
    { label: 'Tableros Inteligencia de Negocios' },
];

const invoicesSubmenu = [
    { label: 'Configuración Inicial' },
    { label: 'Configuración de Moneda' },
    { label: 'Configuración de Formas de Pago' },
    { label: 'Configuración Tipos de Documentos' },
    { label: 'Eliminación de Transacciones de Prueba (Salida en Vivo)' },
    { label: 'Cambio de secuencial de número de factura (Salida en Vivo)' },
];

const forwardInvoicesSubmenu = [
    { label: 'Listado de Facturas NO AUTORIZADAS' },
    { label: 'Corrección de Cliente' },
    { label: 'Corrección de Redondeo' },
    { label: 'Reenvío de Factura' },
];

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [openGeneralMenu, setOpenGeneralMenu] = React.useState(false);
    const [openInvoicesMenu, setOpenInvoicesMenu] = React.useState(false);
    const [openForwardInvoicesMenu, setOpenForwardInvoicesMenu] = React.useState(false);



    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={openDrawer}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={openDrawer}
            >
                <DrawerHeader sx={{
                    bgcolor: '#1976d2',
                    color: '#fff'
                }}>
                    Logo Goes here
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon htmlColor='#fff' />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Box
                        sx={{
                            color: 'rgba(0, 0, 0, 1)',
                            pb: openGeneralMenu ? 2 : 0,
                        }}
                    >
                        <ListItemButton
                            alignItems="flex-start"
                            onClick={() => setOpenGeneralMenu(!openGeneralMenu)}
                            sx={{
                                pt: 2.5,
                            }}
                        >
                            <ListItemIcon sx={{
                                mt: 0
                            }}>
                                <MiscellaneousServices
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Configuración General"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: openGeneralMenu ? 1 : 0,
                                    transform: openGeneralMenu ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                        </ListItemButton>
                        {openGeneralMenu &&
                            generalSubmenu.map((item) => (
                                <ListItemButton
                                    key={item.label}
                                    sx={{ py: 0, minHeight: 32 }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItemButton>
                            ))}
                        <ListItemButton
                            alignItems="flex-start"
                            onClick={() => setOpenInvoicesMenu(!openInvoicesMenu)}
                            sx={{
                                pt: 2.5,
                            }}
                        >
                            <ListItemIcon sx={{
                                mt: 0
                            }}>
                                <Receipt />
                            </ListItemIcon>
                            <ListItemText
                                primary="Facturas Electrónicas"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: openInvoicesMenu ? 1 : 0,
                                    transform: openInvoicesMenu ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                        </ListItemButton>
                        {openInvoicesMenu &&
                            invoicesSubmenu.map((item) => (
                                <ListItemButton
                                    key={item.label}
                                    sx={{ py: 0, minHeight: 32 }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItemButton>
                            ))}
                        <ListItemButton
                            alignItems="flex-start"
                            onClick={() => setOpenForwardInvoicesMenu(!openForwardInvoicesMenu)}
                            sx={{
                                pt: 2.5,
                            }}
                        >
                            <ListItemIcon sx={{
                                mt: 0
                            }}>
                                <AirlineStops />
                            </ListItemIcon>
                            <ListItemText
                                primary="Reenvío de Facturas"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: openForwardInvoicesMenu ? 1 : 0,
                                    transform: openForwardInvoicesMenu ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                        </ListItemButton>
                        {openForwardInvoicesMenu &&
                            forwardInvoicesSubmenu.map((item) => (
                                <ListItemButton
                                    key={item.label}
                                    sx={{ py: 0, minHeight: 32 }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItemButton>
                            ))}
                    </Box>
                </List>
            </Drawer>
            <Main open={openDrawer}>
                <DrawerHeader />
                <Typography paragraph>
                    Content goes here
                </Typography>
            </Main>
        </Box>
    );
}

export default Sidebar
