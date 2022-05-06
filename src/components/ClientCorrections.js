import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getClientInformation, getCustomerTypes, updateClientInformation } from '../actions/http';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Box, Button, Modal, Typography } from '@mui/material';
import ClientTable from './shared/ClientTable';

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

const ClientCorrections = ({ clientId }) => {
  let params = useParams();
  const [customerId, setCustomerId] = useState(params.customerId)
  const dispatch = useDispatch();
  const client_information = useSelector((state) => state.db.client_information);
  const [tableFields, setTableFields] = useState(client_information);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = (values) => {
    let updated_fields = [];
    Object.keys(values).forEach((item, i) => {
      let key = item
      let value = Object.values(values)[i];
      updated_fields.push({ key, value })
    });
    updateItems(updated_fields)
  }

  const updateItems = (updatedFields) => {
    dispatch(updateClientInformation(updatedFields));
  }

  useEffect(() => {
    if (!isEmpty(clientId) && open) {
      setCustomerId(clientId);
      // setBillId(params.billId);
      dispatch(getClientInformation(clientId))
      dispatch(getCustomerTypes())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, open]);

  useEffect(() => {
    setTableFields(client_information);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client_information]);

  return (
    <>
      {clientId === '9999999999999' ? <Typography>Consumidor Final</Typography> : <Button onClick={handleOpen}>{clientId}</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClientTable fields={tableFields} tableName={'CLIENTE'} onUpdate={handleUpdate} />
        </Box>
      </Modal>

    </>
  )
}

export default ClientCorrections