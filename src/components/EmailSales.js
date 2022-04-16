import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { TABLES } from '../constants/tables'
import { styled } from '@mui/material/styles';
import EmailSalesBody from './shared/EmailBody';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationEmails } from '../actions/http';

const EmailSales = () => {
  const dispatch = useDispatch();
  const initial_state = useSelector((state) => state.db.notification_emails);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    dispatch(getNotificationEmails())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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