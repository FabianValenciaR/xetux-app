import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInvoices } from '../actions/http';
import { INVOICE_STATUS } from '../constants/invoice';
import StickyHeadTable from './shared/TablePaginationAction';

const NotAuthorizedInvoices = () => {
  let initial_payload = {
    npp: 10,
    page: 0,
    status: INVOICE_STATUS.NO_AUTHORIZED
  };
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.db.invoices);
  const pagination = useSelector((state) => state.db.pagination);
  const [tableFields, setTableFields] = useState(invoices);
  const [page, setPage] = useState(0);
  const [payload, setPayload] = useState(initial_payload);
  const [npp, setNpp] = useState(10);
  const [status, setStatus] = useState(INVOICE_STATUS.NO_AUTHORIZED);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setNpp(+event.target.value);
    setPage(0);
  };

  const handleUpdateStatus = (status) => {
    setStatus(status);
  }

  useEffect(() => {
    initial_payload.npp = npp;
    initial_payload.page = page;
    initial_payload.status = status;

    setPayload(initial_payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, npp, status]);

  useEffect(() => {
    dispatch(getInvoices(payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);


  useEffect(() => {
    setTableFields(invoices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoices]);

  return (
    <>
      <Box sx={{ display: 'flex', marginY: 3 }}>
        <Button variant={status === INVOICE_STATUS.AUTHORIZED ? 'contained' : 'outlined'}
          onClick={() => handleUpdateStatus(INVOICE_STATUS.AUTHORIZED)}>Autorizadas</Button>
        <Button sx={{ marginX: 3 }} variant={status === INVOICE_STATUS.NO_AUTHORIZED ? 'contained' : 'outlined'}
          onClick={() => handleUpdateStatus(INVOICE_STATUS.NO_AUTHORIZED)}>No autorizadas</Button>
      </Box>
      <StickyHeadTable totalRecords={pagination.totalRecords} payload={payload} invoices={tableFields} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
      {/* <p>TABLA: [T_POS_CUSTOMER]]</p>
      <p>[customer_identification] Buscar el cliente por su ID y permitir corregir los sieguientes campos</p>
      <p>[customer_type_id]</p>
      <p>[customer_full_identification]</p>
      <p>Aqui recibiremos como path parameter el id del cliente desde el listado de facturas </p>
      <p>O tendremos un input que nos permita ingresar el id para filtrar </p>
      <p>Posteriormente procederemos a actualizar la información necesaria </p> */}
    </>
  )
}

export default NotAuthorizedInvoices