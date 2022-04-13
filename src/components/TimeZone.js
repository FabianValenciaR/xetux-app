import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getTimeZone, updateTimeZone } from '../actions/http';

const TimeZone = () => {
  const dispatch = useDispatch();
  const time_zone_current = useSelector((state) => state.db.time_zone);
  let initial_fields = [
    { key: "time_zone", current: "", updated: "America/Guayaquil", isDisabled: true }
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
    dispatch(updateTimeZone(updatedFields));
  }

  useEffect(() => {
    dispatch(getTimeZone())
  });

  useEffect(() => {
    initial_fields.map((field) => {
      if (field.key === "time_zone") {
        field.current = time_zone_current
      }

      return field;
    });
    setTableFields(initial_fields);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time_zone_current]);

  return (
    <TableInputEdit fields={tableFields} tableName={TABLES.T_SYS_REGION_TIMEZONE} onUpdate={handleUpdate} />
  )
}

export default TimeZone