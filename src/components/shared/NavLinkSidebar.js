import { ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinkSidebar.css'

const NavLinkSidebar = ({ subMenu }) => {
    return (
        <>
            {subMenu.map((item) => (
                <NavLink
                    style={({ isActive }) => {
                        if (isActive) {
                            return { textDecoration: 'underline', color: "#000", fontWeight: 'bolder', backgroundColor: "#1976d2de" }
                        } else {
                            return { textDecoration: 'none', color: "#7c7c7c" }
                        }
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={item.url}>
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
            ))
            }
        </>

    )
}

export default NavLinkSidebar