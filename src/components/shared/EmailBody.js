import { Add, Check, Delete, Edit } from '@mui/icons-material'
import { Grid, IconButton, Switch, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import shortUUID from 'short-uuid';

const EmailSalesBody = ({ initial_state }) => {
    const [emails, setEmails] = useState(initial_state);

    const handleEmailChange = ({ target }) => {
        emails.map((email) => {
            if (email.id === target.name) {
                email.email = target.value;
            }
            return email
        });
        setEmails([...emails]);
    }

    const handleNotifyInventoryChange = ({ target }) => {
        emails.map((email) => {
            if (email.id === target.name) {
                email.notifyInventory = target.checked;
            }
            return email
        });
        setEmails([...emails]);
    }

    const handleNotifySalesChange = ({ target }) => {
        emails.map((email) => {
            if (email.id === target.name) {
                email.notifySales = target.checked;
            }
            return email
        });
        setEmails([...emails]);
    }

    const handleAddEmail = () => {
        let newEmail = { id: shortUUID.uuid(), email: "", notifyInventory: true, notifySales: true }
        setEmails([
            ...emails,
            newEmail
        ])
    }

    const handleEdit = (id) => {
        emails.map((email) => {
            if (email.id === id) {
                email.isDisabled = false;
            }
            return email
        });
        setEmails([...emails]);
    }

    const handleUpdate = (id) => {
        emails.map((email) => {
            if (email.id === id) {
                email.isDisabled = true;
            }
            return email
        });
        setEmails([...emails]);

        let updated_email = emails.filter((email) => email.id === id);
        // Dispatch update action
        console.log(updated_email);
    }

    const handleDelete = (id) => {
        let remain_emails = emails.filter((email) => email.id !== id);
        setEmails([...remain_emails]);
        let deleted_email = emails.filter((email) => email.id === id);
        // Dispatch action
        console.log(deleted_email);
    }

    return (
        <>
            {emails.map((email) => (
                <React.Fragment key={email.id}>
                    <Grid item alignItems={'center'} alignSelf={'center'} xs={4}>
                        <TextField disabled={email.isDisabled} key={email.id} name={email.id} value={email.email} onChange={handleEmailChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <Switch disabled={email.isDisabled} checked={email.notifyInventory} name={email.id} onChange={handleNotifyInventoryChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <Switch disabled={email.isDisabled} checked={email.notifySales} name={email.id} onChange={handleNotifySalesChange} />
                    </Grid>
                    <Grid item xs={2}>
                        {email.isDisabled ?
                            <>
                                <Tooltip title="Editar">
                                    <IconButton onClick={() => handleEdit(email.id)} color="primary" aria-label="upload picture" component="span">
                                        <Edit tool />
                                    </IconButton>
                                </Tooltip>
                            </>
                            :
                            <>
                                <Tooltip title="Actualizar">
                                    <IconButton onClick={() => handleUpdate(email.id)} color="primary" aria-label="upload picture" component="span">
                                        <Check />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Eliminar">
                                    <IconButton onClick={() => handleDelete(email.id)} color="primary" aria-label="upload picture" component="span">
                                        <Delete />
                                    </IconButton>
                                </Tooltip>


                            </>
                        }

                    </Grid>
                </React.Fragment>
            ))}
            <Grid item xs={4}>
                <Tooltip title="Nuevo correo">
                    <IconButton onClick={handleAddEmail} color="primary" aria-label="upload picture" component="span">
                        <Add />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>


    )
}

export default EmailSalesBody