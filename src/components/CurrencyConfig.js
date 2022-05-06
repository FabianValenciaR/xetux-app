import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCurrencyConfig } from '../actions/http';

const CurrencyConfig = () => {
  const dispatch = useDispatch();

  const handleCurrencyConfig = () => {
    dispatch(updateCurrencyConfig())
  }

  return (
    <Container>
      <Typography variant="h5" align='center' component="div" gutterBottom>
        Configurar Moneda
      </Typography>
      <Typography sx={{ marginTop: 5}} variant="h7" align='left' component="div" gutterBottom>
        Reinicia la configuración inicial de moneda con USD como moneda por defecto.
      </Typography>
      <Button onClick={handleCurrencyConfig} sx={{ marginTop: 2 }} variant='contained'>Configurar</Button>
    </Container>
  )
}

export default CurrencyConfig