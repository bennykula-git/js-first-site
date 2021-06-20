import React from 'react';

const FormField = (props) => {
  return (
    <div className='form-floating mb-3'>
      <input
        className='form-control'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        data-sb-validations='required'
      />
      <label for={props.id}>{props.lable}</label>
      <div className='invalid-feedback' data-sb-feedback={props.feedback}>
        {props.msg}
      </div>
    </div>
  );
};

export default FormField;
