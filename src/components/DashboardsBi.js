import React, { useEffect, useState } from 'react'
import TableInputEdit from './TableInputEdit'
import { TABLES } from '../constants/tables'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardConfig, updateDashboardConfig } from '../actions/http';

const DashboardsBi = () => {
  const dispatch = useDispatch();
  const dashboard_config = useSelector((state) => state.db.dashboard_config);
  let initial_fields = [
    { key: "url", current: "", updated: "", isDisabled: false },
    { key: "position", current: "", updated: "", isDisabled: false },
    { key: "frame_height", current: "", updated: "", isDisabled: false },
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
    console.log(updatedFields);
    dispatch(updateDashboardConfig(updatedFields));
  }

  useEffect(() => {
    dispatch(getDashboardConfig())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTableFields([...dashboard_config]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboard_config]);

  return (
    <TableInputEdit fields={tableFields} tableName={TABLES.T_PA_EXTERNAL_DASHBOARD} onUpdate={handleUpdate} />
  )
}

export default DashboardsBi