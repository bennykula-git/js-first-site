import React from 'react';
import useInput from '../../hooks/useInput';

const FormField = (props) => {
  // const {
  //   value : name,
  //   isValidValue :isValidName,
  //   isError :isErrorName,
  //   touchedHandler :nameTouchedHandler,
  //   valueChangedHandler :nameChangedHandler,
  //   reset :resetName,
  // } = useInput(v=>v.trim() !='')

  // const {
  //   value,
  //   isValidValue,
  //   isError,
  //   touchedHandler,
  //   valueChangedHandler,
  //   reset,
  // } = useInput((v) => v.trim() !== '');

  return (
    <div className='form-floating mb-3'>
      <input
        className='form-control'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        // data-sb-validations='required'
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      <label>{props.lable}</label>
      {props.isError && (
        <div
          className='invalid-input'
          // data-sb-feedback={props.feedback}
        >
          {props.msg}
        </div>
      )}
    </div>
  );
};

export default FormField;
