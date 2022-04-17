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
    const [formValues, handleInputChange, initFormFields] = useForm();

    const handleUpdate = () => {
        let valuesToBeUpdated = formValues;
        tableFields.forEach(tableField => {
            if (isEmpty(valuesToBeUpdated[tableField.key])) {
                let inputValue = isEmpty(get(tableField, "updated", "")) ? get(tableField, "current", "") : get(tableField, "updated", "");

                let newValue = {
                    key: get(tableField, "key", ""),
                    value: inputValue
                }

                valuesToBeUpdated = {
                    ...valuesToBeUpdated,
                    [`${newValue.key}`]: `${newValue.value}`
                }

            }
        });
        onUpdate(valuesToBeUpdated);
    }

    const initializeInputs = () => {
        let updatedValues = {};
        tableFields.forEach(tableField => {
            if (!isEmpty(tableField.updated)) {
                updatedValues = {
                    ...updatedValues,
                    [`${tableField.key}`]: `${tableField.updated}`
                }
            }
        });
        initFormFields(updatedValues)
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
            <TableContainer elevation={6} sx={{ mt: 4, mb: 4 }} component={Paper}>
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
                                    {/* {get(row, "isDisabled", false) ?
                                        <Typography key={row.key} variant="h7" align='center' component="div" gutterBottom>
                                            {row.updated}
                                        </Typography> :
                                        <TextField key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} />
                                    } */}
                                    <TextField disabled={get(row, "isDisabled", false)} key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} />
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