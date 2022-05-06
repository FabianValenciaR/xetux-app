import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { defaultTo, get, isEmpty } from "lodash";
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';

const ClientTable = ({ fields, tableName, onUpdate }) => {
    const [tableFields, setTableFields] = useState(fields);
    const customer_types = useSelector((state) => state.db.customer_types);
    const [customerTypes, setCustomerTypes] = useState(customer_types);
    const [formValues, handleInputChange, initFormFields] = useForm();
    let dropdownValue = "";

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
                    [`${newValue.key}`]: `${newValue.value}`,
                    [`customer_type_id`]: `${dropdownValue}`
                }

            }
        });
        onUpdate(valuesToBeUpdated);
    }

    const initializeInputs = () => {
        let updatedValues = {};
        tableFields?.forEach(tableField => {
            if (!isEmpty(tableField.updated)) {
                updatedValues = {
                    ...updatedValues,
                    [`${tableField.key}`]: `${tableField.updated}`
                }
            }
        });
        initFormFields(updatedValues)
    }

    const handleDropdownChange = ({ target }) => {
        dropdownValue = `${target.value}`;
    }

    useEffect(() => {
        setTableFields(fields);
        initializeInputs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields])

    useEffect(() => {
        setCustomerTypes(customer_types)
    }, [customer_types])


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
                        {defaultTo(tableFields, []).map((row) => (
                            <TableRow
                                key={row.key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.key}
                                </TableCell>
                                <TableCell sx={{ maxWidth: 300, wordBreak: 'break-word' }} align="center">{row.current}</TableCell>
                                <TableCell align="center">
                                    {/* {get(row, "isDisabled", false) ?
                                        <Typography key={row.key} variant="h7" align='center' component="div" gutterBottom>
                                            {row.updated}
                                        </Typography> :
                                        <TextField key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} />
                                    } */}
                                    {row.key === "customer_type_id" ?
                                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Tipo de documento</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                label="document-type"
                                                onChange={handleDropdownChange}
                                            >
                                                {defaultTo(customerTypes, []).map((type) => (
                                                    <MenuItem value={get(type, "customer_type_id", "")}>{get(type, "customer_type_name", "")}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl> :
                                        <TextField disabled={get(row, "isDisabled", false)} key={row.key} name={row.key} value={formValues[row.key]} onChange={handleInputChange} />
                                    }
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

export default ClientTable