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
        Praesent venenatis eleifend consectetur. Fusce elit metus, congue ac posuere vel, congue quis enim. Sed mollis lectus consectetur, tempor nisi ut, pulvinar nunc. Etiam ornare faucibus lectus, et sagittis mi efficitur vitae. Donec fringilla orci eget lacinia auctor. Morbi molestie elit a tristique blandit. Fusce viverra nibh vitae quam fermentum, ac semper nunc commodo. Aenean felis dolor, lobortis id porttitor ac, dictum auctor nulla. Nullam vel vehicula nibh. In efficitur dictum felis, quis consequat ante mattis ut. Morbi hendrerit metus quis purus lacinia pellentesque. Cras ullamcorper sagittis magna id congue. Vivamus at gravida est, non scelerisque metus. Mauris enim nunc, interdum sed neque vitae, luctus imperdiet metus.
      </Typography>
      <Button onClick={handleReset} sx={{ marginTop: 2 }} variant='contained'>Resetear</Button>
    </Container>
  )
}

export default DocumentType