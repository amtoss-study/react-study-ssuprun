import React from 'react';
import { DataFromValues, User } from '../types';

const NameForm = ({ onSubmit }: { onSubmit: (values: DataFromValues) => void }) => {
    const [values, setValues] = React.useState<DataFromValues>({
        name: '',
        surname: '',
        email: ''
    });
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit(values);
            }}
        >
            <input
                placeholder='Name'
                name="name"
                value={values.name}
                onChange={event => {
                    setValues({...values, name:event.target.value})
                }}
            />
            <input
                placeholder='Surname'
                name="surnname"
                value={values.surname}
                onChange={event => {
                    setValues({...values, surname:event.target.value})
                }}
            />
            <input
                placeholder='E-mail address'
                name="email"
                value={values.email}
                onChange={event => {
                    setValues({...values, email:event.target.value})
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
  };
  
  export default NameForm;