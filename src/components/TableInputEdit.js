import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useForm } from '../hooks/useForm'
import { useEffect } from 'react';
import { useState } from 'react';
import { get, isEmpty } from "lodash";

const TableInputEdit = ({ fields, tableName, onUpdate }) => {
    const [tableFields, setTableFields] = useState(fields)
    const [formValues, handleInputChange] = useForm();

    const handleUpdate = () => {
        let valuesToBeUpdated = formValues
        tableFields.forEach(tableField => {
            if (isEmpty(valuesToBeUpdated[tableField.key])) {
                console.log("ENTERED");
                let newValue = {
                    key: get(tableField, "key", ""),
                    value: get(tableField, "updated", "")
                }

                valuesToBeUpdated = {
                    ...valuesToBeUpdated,
                    [`${newValue.key}`]: `${newValue.value}`
                }

            }
        });
        console.log(valuesToBeUpdated);
        // onUpdate(valuesToBeUpdated);
    }

    const initializeInputs = () => {
        tableFields.forEach(tableField => {
            if (!isEmpty(tableField.updated)) {
                handleInputChange({
                    target: {
                        name: get(tableField, "key", ""),
                        value: tableField.updated
                    }
                })
            }
        });
    }

    useEffect(() => {
        setTableFields(fields);
        initializeInputs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields])


    return (
        <Container>
            <Typography variant="h5" align='center' component="div" gutterBottom>
                {tableName}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Campo</TableCell>
                            <TableCell align="center">Valor Actual</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableFields.map((row) => (
                            <TableRow
                                key={row.key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.key}
                                </TableCell>
                                <TableCell align="center">{row.current}</TableCell>
                                <TableCell align="center">
                                    {get(row, "isDisabled", false) ?
                                        <Typography key={row.key} variant="h7" align='center' component="div" gutterBottom>
                                            {row.updated}
                                        </Typography> :
                                        <TextField key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} />
                                    }
                                    {/* <TextField disabled={get(row, "isDisabled", false)} key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} /> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={handleUpdate} sx={{ marginTop: 2 }} variant='contained'>Actualizar</Button>
        </Container>

    );
}

export default TableInputEdit