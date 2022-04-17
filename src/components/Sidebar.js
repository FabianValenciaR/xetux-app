import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AirlineStops, KeyboardArrowDown, MiscellaneousServices, Receipt } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import NavLinkSidebar from './shared/NavLinkSidebar';

const generalSubmenu = [
    { label: 'Zona Horaria', url: "/home/time-zone" },
    { label: 'Parámetros del Recibo', url: "/home/receipt-parameters" },
    { label: 'Parámetros de la Factura', url: "/home/invoice-parameters" },
    { label: 'Destinatarios de correo de Ventas', url: "/home/email-sales" },
    { label: 'Envío de Ventas a XONE', url: "/home/sales-xone" },
    { label: 'Tableros Inteligencia de Negocios', url: "/home/dashboards-bi" },
];

const invoicesSubmenu = [
    { label: 'Configuración Inicial', url: "/home/invoice-init" },
    { label: 'Configuración de Moneda', url: "/home/currency-config" },
    { label: 'Configuración de Formas de Pago', url: "/home/payment-method" },
    { label: 'Configuración Tipos de Documentos', url: "/home/document-type" },
    { label: 'Eliminación de Transacciones de Prueba (Salida en Vivo)', url: "/home/delete-transactions" },
    { label: 'Cambio de secuencial de número de factura (Salida en Vivo)', url: "/home/secuential-change" },
];

const forwardInvoicesSubmenu = [
    { label: 'Listado de Facturas NO AUTORIZADAS', url: "/home/not-authorized-invoices" },
    { label: 'Corrección de Cliente', url: "/home/client-corrections" },
    { label: 'Corrección de Redondeo', url: "/home/round-corrections" },
    { label: 'Reenvío de Factura', url: "/home/fordward-invoice" },
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
                    <NavLinkSidebar subMenu={generalSubmenu} />
                }
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
                    <NavLinkSidebar subMenu={invoicesSubmenu} />
                }
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
                    <NavLinkSidebar subMenu={forwardInvoicesSubmenu} />
                }
            </Box>
        </List>
    );
}

export default Sidebar
