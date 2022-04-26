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
import { defaultTo } from 'lodash';

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function StickyHeadTable({ payload, invoices, handleChangePage, handleChangeRowsPerPage }) {
  const [tableConfig, setTableConfig] = useState({
    npp: 10,
    page: 0,
    status: INVOICE_STATUS.AUTHORIZED
  })
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const formatColumns = () => {
    let new_columns = Object.keys(defaultTo(records[0], {}));
    setColumns(new_columns);
    setRows(defaultTo(records, []));
    console.log(records);
  }

  useEffect(() => {
    setTableConfig(payload);
    console.log(payload);

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
                  {column}
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
                    if (column === 'request') {

                    }
                    return (
                      <TableCell key={column} align={'center'}>
                        {column === 'response' || column === 'request' ? 'Ver más' : value}
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
        count={rows.length}
        rowsPerPage={tableConfig.npp}
        page={tableConfig.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}