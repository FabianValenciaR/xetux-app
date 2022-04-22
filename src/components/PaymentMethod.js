import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentMethods, setPaymentMethods } from '../actions/http';

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const payment_methods = useSelector((state) => state.db.payment_methods);
  const [tableFields, setTableFields] = useState(payment_methods);
  let updateRecords = [];
  let genericUpdateRequest = {
    tableName: TABLES.T_POS_PAYFORM,
    records: updateRecords
  }

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
    updateRecords = [];
    updatedFields.forEach(field => {
      updateRecords = [
        ...updateRecords,
        {
          setProperty: "code_timbra_payform",
          setValue: field.value,
          conditionProperty: "payform_description",
          conditionValue: field.key
        }
      ]
    });
    genericUpdateRequest.records = updateRecords;
    console.log(genericUpdateRequest);
    dispatch(setPaymentMethods(genericUpdateRequest));
  }

  useEffect(() => {
    dispatch(getPaymentMethods())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTableFields(payment_methods);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payment_methods]);

  return (
      <TableInputEdit fields={tableFields} tableName={TABLES.T_POS_PAYFORM} onUpdate={handleUpdate} />
  )
}

export default PaymentMethod