import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceConfig, updateInvoiceConfig } from '../actions/http';
import { TABLES } from '../constants/tables';
import TableInputEdit from './TableInputEdit';

const InvoiceInitialConfig = () => {
  const dispatch = useDispatch();
  const invoice_config = useSelector((state) => state.db.invoice_config);
  const [tableFields, setTableFields] = useState(invoice_config);

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
    dispatch(updateInvoiceConfig(updatedFields));
  }

  useEffect(() => {
    dispatch(getInvoiceConfig())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTableFields(invoice_config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoice_config]);

  return (
    <TableInputEdit fields={tableFields} tableName={"Configuración de Facturación Electrónica"} onUpdate={handleUpdate} />
  )
}

export default InvoiceInitialConfig

