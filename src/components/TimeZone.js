import React from 'react'
import BasicTable from './Table'
import { TABLES } from '../constants/tables'

const TimeZone = () => {
  const fields = [
    { key: "time_zone", current: "America/Guayaquil" },
    { key: "new_fielssd", current: "Test" }
  ];

  return (
    <BasicTable fields={fields} tableName={TABLES.REGION_TIMEZONE} />
  )
}

export default TimeZone