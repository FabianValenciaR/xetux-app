import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getXoneConfig, updateXoneConfig } from '../actions/http';

const SalesToXONE = () => {
  const dispatch = useDispatch();
  const xone_config = useSelector((state) => state.db.xone_config);
  const [tableFields, setTableFields] = useState(xone_config);

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
    dispatch(updateXoneConfig(updatedFields));
  }

  useEffect(() => {
    dispatch(getXoneConfig())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTableFields(xone_config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xone_config]);

  return (
    <TableInputEdit fields={tableFields} tableName={`Configurar parámetros XONE`} onUpdate={handleUpdate} />
  )
}

export default SalesToXONE