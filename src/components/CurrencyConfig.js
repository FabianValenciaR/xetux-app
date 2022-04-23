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
      <Button onClick={handleCurrencyConfig} sx={{ marginTop: 2 }} variant='contained'>Configurar</Button>
    </Container>
  )
}

export default CurrencyConfig