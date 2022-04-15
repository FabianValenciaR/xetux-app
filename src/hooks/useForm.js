
import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const init = (initialValues) => {
        setValues(initialValues);
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [`${target.name}`]: `${target.value}`
        });

    }

    return [values, handleInputChange, init];

}