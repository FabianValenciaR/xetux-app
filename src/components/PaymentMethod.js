import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentMethods, updateTimeZone } from '../actions/http';

const PaymentMethod = () => {
  // const dispatch = useDispatch();
  // const payment_methods = useSelector((state) => state.db.time_zone);
  // let initial_fields = [
  //   { key: "time_zone", current: "", updated: "America/Guayaquil", isDisabled: true }
  // ];
  // const [tableFields, setTableFields] = useState();

  // const handleUpdate = (values) => {
  //   let updated_fields = [];
  //   Object.keys(values).forEach((item, i) => {
  //     let key = item
  //     let value = Object.values(values)[i];
  //     updated_fields.push({ key, value })
  //   });
  //   updateItems(updated_fields)
  // }

  // const updateItems = (updatedFields) => {
  //   dispatch(updateTimeZone(updatedFields));
  // }

  // useEffect(() => {
  //   dispatch(getPaymentMethods())
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   initial_fields.map((field) => {
  //     if (field.key === "time_zone") {
  //       field.current = payment_methods
  //     }

  //     return field;
  //   });
  //   setTableFields(initial_fields);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [payment_methods]);

  return (
    // <TableInputEdit fields={tableFields} tableName={TABLES.T_POS_PAYFORM} onUpdate={handleUpdate} />
    <div>
      <h1>Configuracion Inicial</h1>
      <p>TABLA: [T_POS_PAYFORM]</p>
      <p>[currency_id_default] validar que es 1 por  USD (esto se puede hacer desde la plataforma tal vez no es necesario) </p>
      <p>[code_timbra_payform] 1 Efectivo 20 Uso del sistema financiero 19 Sin uso del sistema financiero como cortesias  </p>
    </div>
  )
}

export default PaymentMethod