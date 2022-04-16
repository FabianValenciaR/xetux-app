import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { TABLES } from '../constants/tables'
import { styled } from '@mui/material/styles';
import EmailSalesBody from './shared/EmailBody';

const EmailSales = () => {
  let initial_state = [
    { id: "test@test.com", email: "test@test.com", notifyInventory: true, notifySales: false, isDisabled: true },
    { id: "fabito@test.com", email: "fabito@test.com", notifyInventory: true, notifySales: true, isDisabled: false },
  ]

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <Container>

      <Typography variant="h5" align='center' component="div" gutterBottom>
        {TABLES.DESTINATARIO}
      </Typography>

      <Item elevation={3} >
        <Grid container mt={4} mb={4} spacing={2}>

          <Grid item xs={4}>
            <Typography variant="h7" align='center' component="div" gutterBottom>
              CORREO
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h7" align='center' component="div" gutterBottom>
              ENVIAR INVENTARIO
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h7" align='center' component="div" gutterBottom>
              ENVIAR VENTAS
            </Typography>
          </Grid>

          <Grid item xs={2}>
            ACCIÓN
          </Grid>

          <EmailSalesBody initial_state={initial_state} />
        </Grid>
      </Item>

    </Container>
  )
}

export default EmailSales