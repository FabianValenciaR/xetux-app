import React, { useEffect, useState } from 'react'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { genericSelect, genericUpdate } from '../actions/http';
import { TextAreaItems } from './shared/TextAreaItems';

const InvoiceParameters = () => {
  const dispatch = useDispatch();
  const genericRecords = useSelector((state) => state.db.generic_select);
  const genericSelectRequest = {
    tableName: TABLES.T_SYS_PARAMETERS,
    records: "parameter_id, parameter_description",
    conditions: [
      { field: "parameter_id", value: "43" },
      { field: "parameter_id", value: "139" },
    ]
  };
  let updateRecords = [];
  let genericUpdateRequest = {
    tableName: TABLES.T_SYS_PARAMETERS,
    records: updateRecords
  }

  let initial_fields = [
    { key: "43", current: "", updated: "" },
    { key: "139", current: "", updated: "" },
  ];
  const [tableFields, setTableFields] = useState(initial_fields);

  const handleUpdate = (values) => {
    let updated_fields = [];
    Object.keys(values).forEach((item, i) => {
      let key = item
      let value = Object.values(values)[i];
      updated_fields = [
        ...updated_fields,
        { key, value }
      ];
    });
    updateItems(updated_fields)
  }

  const updateItems = (updatedFields) => {
    updateRecords = [];
    updatedFields.forEach(field => {
      updateRecords = [
        ...updateRecords,
        {
          setProperty: "parameter_description",
          setValue: field.value,
          conditionProperty: "parameter_id",
          conditionValue: field.key
        }
      ]
    });
    genericUpdateRequest.records = updateRecords;
    dispatch(genericUpdate(genericUpdateRequest));
  }

  useEffect(() => {
    dispatch(genericSelect(genericSelectRequest))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initial_fields.map((field) => {
      genericRecords.forEach(item => {
        if (field.key === `${item["parameter_id"]}`) {
          field.current = item["parameter_description"]
          field.updated = item["parameter_description"]
        }
      });

      return field;
    });
    setTableFields(initial_fields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genericRecords]);

  return (
    <>
      <TextAreaItems fields={tableFields} tableName={`Configurar parámetros de la factura`} onUpdate={handleUpdate} />
      {/* <TableInputEdit fields={tableFields} tableName={TABLES.T_SYS_PARAMETERS} onUpdate={handleUpdate} /> */}
    </>
  )
}

export default InvoiceParameters