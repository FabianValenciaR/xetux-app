import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateDocumentTypes } from '../actions/http';

const DocumentType = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(updateDocumentTypes())
  }

  return (
    <Container>
      <Typography variant="h5" align='center' component="div" gutterBottom>
        Resetear Consumidor Final
      </Typography>
      <Typography variant="body1" align='left' component="div" gutterBottom>
      </Typography>
      <Button onClick={handleReset} sx={{ marginTop: 2 }} variant='contained'>Resetear</Button>
    </Container>
  )
}

export default DocumentType