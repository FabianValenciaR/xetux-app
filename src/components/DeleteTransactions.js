import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { goLive } from '../actions/http';

const DeleteTransactions = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("0");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleGoLive = () => {
    const payload = {
      sequencial: value
    }
    dispatch(goLive(payload))
  }

  return (
    <Container>
      <Typography variant="h5" align='center' component="div" gutterBottom>
        Salir en Vivo
      </Typography>
      <Box marginY={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography marginX={3} variant="h8" align='center' component="div" gutterBottom>
          Número de secuencial
        </Typography>
        <TextField
          marginX={3}
          type="number"
          value={value}
          variant="outlined"
          inputProps={{
            maxLength: 13,
            step: "1"
          }}
          onChange={(e) => setValue(parseFloat(e.target.value).toFixed(0))}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button marginX={3} onClick={handleGoLive} sx={{ marginTop: 2 }} variant='contained'>Salir en Vivo</Button>
      </Box>
    </Container>
  )
}

export default DeleteTransactions