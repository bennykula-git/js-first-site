import React from 'react';
import useInput from '../../hooks/useInput';

const FormField = (props) => {
  return (
    <div className='form-floating mb-3'>
      <input
        className='form-control'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      <label>{props.lable}</label>
      {props.isError && <div className='invalid-input'>{props.msg}</div>}
    </div>
  );
};

export default FormField;
