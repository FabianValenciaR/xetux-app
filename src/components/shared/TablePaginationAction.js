import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { INVOICE_STATUS } from '../../constants/invoice';
import { defaultTo, get, isEmpty } from 'lodash';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function StickyHeadTable({ totalRecords, payload, invoices, handleChangePage, handleChangeRowsPerPage }) {
  const [tableConfig, setTableConfig] = useState({
    npp: 10,
    page: 0,
    status: INVOICE_STATUS.AUTHORIZED
  })
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const formatColumns = () => {
    let new_columns = Object.keys(defaultTo(records[0], {}));
    setColumns(new_columns);
    setRows(defaultTo(records, []));
  }

  const handleOpenCustomer = (customerId) => {
    navigate(`/home/client-corrections/${customerId}`);
  }

  const getResponseFromJSON = (value) => {
    try {
      if (!isEmpty(value)) {
        let object = JSON.parse(value);
        return get(object, "errorSRI", "");
      }
    } catch (error) {
      return value;
    }
  }

  const getCustomerIdFromXml = (xml) => {
    let x, xmlDoc, parser;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");
    x = xmlDoc.getElementsByTagName('identificacionComprador');
    let customerId = get(x, "[0].textContent", "");
    return customerId
  }

  const drawValueCell = (column, value) => {


    switch (column) {
      case 'response':
        return getResponseFromJSON(value)

      case 'request':
        const id = getCustomerIdFromXml(value);
        return (<Button onClick={() => handleOpenCustomer(id)}>{id}</Button>)

      default:
        return value;
    }
  }

  useEffect(() => {
    setTableConfig(payload);
  }, [payload])

  useEffect(() => {
    setRecords(invoices);
  }, [invoices])

  useEffect(() => {
    formatColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [records])


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  align={'center'}
                  style={{ minWidth: 20 }}
                >
                  {column === 'request' ? 'cliente' : column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column];
                    return (
                      <TableCell key={column} align={'center'}>
                        {drawValueCell(column, value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={totalRecords}
        rowsPerPage={tableConfig.npp}
        page={tableConfig.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}