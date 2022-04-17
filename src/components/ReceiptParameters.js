import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getReceiptParameter, updateReceiptParameter } from '../actions/http';

const ReceiptParameters = () => {
  const dispatch = useDispatch();
  const field8 = useSelector((state) => state.db["8"]);
  const field12 = useSelector((state) => state.db["12"]);
  const field20 = useSelector((state) => state.db["20"]);
  const field21 = useSelector((state) => state.db["21"]);

  let initial_fields = [
    { key: "8", current: "", updated: "IVA 12%" },
    { key: "12", current: "", updated: "RUC/CI", isDisabled: true },
    { key: "20", current: "", updated: "Comprobante de Venta #", isDisabled: true },
    { key: "21", current: "", updated: "USD", isDisabled: true }
  ];
  const [tableFields, setTableFields] = useState(initial_fields);

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
    dispatch(updateReceiptParameter(updatedFields));
  }

  useEffect(() => {
    dispatch(getReceiptParameter())
  }, []);

  useEffect(() => {
    initial_fields.map((field) => {
      if (field.key === "8") {
        field.current = field8
      }
      if (field.key === "12") {
        field.current = field12
      }
      if (field.key === "20") {
        field.current = field20
      }
      if (field.key === "21") {
        field.current = field21
      }

      return field;
    });
    setTableFields(initial_fields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field8, field12, field20, field21]);

  return (
    <TableInputEdit fields={tableFields} tableName={TABLES.T_POS_RECEIPT_FISCAL_PRINTER} onUpdate={handleUpdate} />
  )
}

export default ReceiptParameters