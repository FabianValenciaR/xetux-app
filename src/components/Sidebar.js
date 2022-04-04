import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AirlineStops, KeyboardArrowDown, MiscellaneousServices, Receipt } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const generalSubmenu = [
    { label: 'Zona Horaria', url: "/login" },
    { label: 'Parámetros del Recibo', url: "/login" },
    { label: 'Parámetros de la Factura', url: "/login" },
    { label: 'Destinatarios de correo de Ventas', url: "/login" },
    { label: 'Envío de Ventas a XONE', url: "/login" },
    { label: 'Tableros Inteligencia de Negocios', url: "/login" },
];

const invoicesSubmenu = [
    { label: 'Configuración Inicial', url: "/login" },
    { label: 'Configuración de Moneda', url: "/login" },
    { label: 'Configuración de Formas de Pago', url: "/login" },
    { label: 'Configuración Tipos de Documentos', url: "/login" },
    { label: 'Eliminación de Transacciones de Prueba (Salida en Vivo)', url: "/login" },
    { label: 'Cambio de secuencial de número de factura (Salida en Vivo)', url: "/login" },
];

const forwardInvoicesSubmenu = [
    { label: 'Listado de Facturas NO AUTORIZADAS', url: "/login" },
    { label: 'Corrección de Cliente', url: "/login" },
    { label: 'Corrección de Redondeo', url: "/login" },
    { label: 'Reenvío de Factura', url: "/login" },
];

const Sidebar = () => {
    const [openGeneralMenu, setOpenGeneralMenu] = React.useState(false);
    const [openInvoicesMenu, setOpenInvoicesMenu] = React.useState(false);
    const [openForwardInvoicesMenu, setOpenForwardInvoicesMenu] = React.useState(false);

    return (
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
                        <NavLink to={item.url}>
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0, minHeight: 32 }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        </NavLink>
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
                        <NavLink to={item.url}>
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0, minHeight: 32 }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        </NavLink>
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
                        <NavLink to={item.url}>
                            <ListItemButton
                                key={item.label}
                                sx={{ py: 0, minHeight: 32 }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        </NavLink>
                    ))}
            </Box>
        </List>
    );
}

export default Sidebar
