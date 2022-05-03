import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { goLive } from '../actions/http';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteTransactions = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("0");
  const [open, setOpen] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleGoLive = () => {
    setOpen(true);
  }

  const handleAcept = () => {
    const payload = {
      sequencial: value
    }
    dispatch(goLive(payload))
  }

  const handleClose = () => {
    setOpen(false);
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
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>¿Está seguro? Esta acción no se puede deshacer.</Typography>
          <Box style={{
            marginTop: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button onClick={handleClose} variant='contained' color='error'>Cancelar</Button>
            <Button onClick={handleAcept} style={{marginLeft: 20}} variant='contained' color='success'>Aceptar</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  )
}

export default DeleteTransactions