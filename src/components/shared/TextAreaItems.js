import { Button, Container, Grid, Paper, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { styled } from '@mui/material/styles';
import { get, isEmpty } from 'lodash';

export const TextAreaItems = ({ fields, tableName, onUpdate }) => {
    const [tableFields, setTableFields] = useState(fields);
    const [formValues, handleInputChange, initFormFields] = useForm();
    let textAreaValues = {};

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eee',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const handleUpdate = () => {
        let valuesToBeUpdated = textAreaValues
        tableFields.forEach(tableField => {
            if (isEmpty(valuesToBeUpdated[tableField.key])) {
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
        textAreaValues = updatedValues;
        initFormFields(updatedValues)
    }

    useEffect(() => {
        setTableFields(fields);
        initializeInputs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableFields, fields])

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        textAreaValues = {
            ...textAreaValues,
            [`${name}`]: `${value}`
        }
    }


    return (
        <Container>
            <Typography variant="h5" align='center' component="div" gutterBottom>
                {tableName}
            </Typography>
            <Grid container mt={4} mb={4} spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6" align='center' component="div" gutterBottom>
                        CAMPO
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h6" align='center' component="div" gutterBottom>
                        VALOR
                    </Typography>
                </Grid>
                {tableFields.map((row) => (
                    <>
                        <Grid item alignSelf={'center'} xs={2}>
                            <Item elevation={3} >{row.key}</Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item elevation={3} >
                                <TextareaAutosize
                                    onChange={onChange}
                                    key={row.key}
                                    name={row.key}
                                    minRows={3}
                                    maxRows={5}
                                    defaultValue={formValues[row.key]}
                                    style={{ width: 600 }}
                                />
                            </Item>
                        </Grid>
                    </>
                ))}
            </Grid>
            <Button onClick={handleUpdate} sx={{ marginTop: 2 }} variant='contained'>Actualizar</Button>
        </Container>

    )
}
