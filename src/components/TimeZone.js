import React, { useEffect, useState } from 'react'
import BasicTable from './Table'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getTimeZone } from '../actions/http';

const TimeZone = () => {
  let initial_fields = [
    { key: "time_zone", current: "" }
  ];
  const dispatch = useDispatch();
  const time_zone_current = useSelector((state) => state.db.time_zone);
  const [tableFields, setTableFields] = useState(initial_fields);

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
  }, [time_zone_current]);


  return (
    <BasicTable fields={tableFields} tableName={TABLES.REGION_TIMEZONE} />
  )
}

export default TimeZone