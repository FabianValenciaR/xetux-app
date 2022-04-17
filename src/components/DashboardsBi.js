import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardConfig, updateDashboardConfig, updateTimeZone } from '../actions/http';

const DashboardsBi = () => {
  const dispatch = useDispatch();
  const dashboard_config = useSelector((state) => state.db.dashboard_config);
  let initial_fields = [
    { key: "url", current: "", updated: "", isDisabled: false }
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
    dispatch(updateDashboardConfig(updatedFields));
  }

  useEffect(() => {
    dispatch(getDashboardConfig())
  });

  useEffect(() => {
    initial_fields.map((field) => {
      if (field.key === "url") {
        field.current = dashboard_config
      }

      return field;
    });
    setTableFields(initial_fields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboard_config]);

  return (
    <TableInputEdit fields={tableFields} tableName={TABLES.T_SYS_REGION_TIMEZONE} onUpdate={handleUpdate} />
  )
}

export default DashboardsBi