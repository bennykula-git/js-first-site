import React, { useState } from 'react';
import FormField from './FormField';
import useInput from '../../hooks/useInput';

const formFields = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter your name...',
    lable: 'Full name',
    msg: 'A name is required.',
    feedback: 'name:required',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'name@example.com',
    lable: 'Full name',
    msg: 'A valid email is required.',
    feedback: 'email:required',
  },
  {
    id: 'phone',
    type: 'tel',
    placeholder: '(123) 456-7890',
    lable: 'Phone number',
    msg: 'Phone number is required.',
    feedback: 'phone:required',
  },
];

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setemail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [msg, setMsg] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const req = {
      name,
      // email,
      // phone,
      // msg,
    };
    fetch('http://localhost:8080/api/test/jjj')
      .then((res) => res.json())
      .then((d) => console.log(d.firstName));
    // alert('SSSS');

    resetName();
    resetEmail();
    resetPhone();
    resetMsg();
  };
  const {
    value: name,
    isValidValue: isValidName,
    isError: isNameError,
    touchedHandler: nameTouched,
    valueChangedHandler: nameChanged,
    reset: resetName,
  } = useInput((v) => v.trim() !== '');

  const {
    value: email,
    isValidValue: isValidEmail,
    isError: isEmailError,
    touchedHandler: emailTouched,
    valueChangedHandler: emailChanged,
    reset: resetEmail,
  } = useInput((v) => /\S+@\S+\.\S+/.test(v));

  const {
    value: phone,
    isValidValue: isValidPhone,
    isError: isPhoneError,
    touchedHandler: phoneTouched,
    valueChangedHandler: phoneChanged,
    reset: resetPhone,
  } = useInput((v) => /^\d+$/.test(v));

  const {
    value: msg,
    isValidValue: isValidMsg,
    isError: isMsgError,
    touchedHandler: msgTouched,
    valueChangedHandler: msgChanged,
    reset: resetMsg,
  } = useInput((v) => v.trim() !== '');

  const isValidForm = isValidName && isValidEmail && isValidPhone && isValidMsg;
  return (
    // <!-- Contact Section-->
    <section className='page-section' id='contact'>
      <br />
      <br />
      <div className='container'>
        {/* <!-- Contact Section Heading--> */}
        <h2
          className='
            page-section-heading
            text-center text-uppercase text-secondary
            mb-0
          '
        >
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className='divider-custom'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-xl-7'>
            {/* <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!--> */}
            <form
              id='contactForm'
              // data-sb-form-api-token='API_TOKEN'
            >
              {/* <!-- Name input--> */}
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  id='name'
                  type='text'
                  placeholder='Enter your name...'
                  // data-sb-validations='required'
                  value={name}
                  onChange={nameChanged}
                  onBlur={nameTouched}
                />
                <label htmlFor='name'>Full name</label>
                {isNameError && (
                  <div
                    className='invalid-input'
                    // data-sb-feedback='name:required'
                  >
                    A name is required.
                  </div>
                )}
              </div>
              {/* <!-- Email address input--> */}
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  placeholder='name@example.com'
                  // data-sb-validations='required,email'
                  value={email}
                  onChange={emailChanged}
                  onBlur={emailTouched}
                />
                <label htmlFor='email'>Email address</label>
                {isEmailError && (
                  <div
                    className='invalid-input'
                    // data-sb-feedback='email:required'
                  >
                    An valid email is required.
                  </div>
                )}
              </div>
              {/* <!-- Phone number input--> */}
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  id='phone'
                  type='tel'
                  placeholder='(123) 456-7890'
                  // data-sb-validations='required'
                  value={phone}
                  onChange={phoneChanged}
                  onBlur={phoneTouched}
                />
                <label htmlFor='tel'>Phone number</label>
                {isPhoneError && (
                  <div
                    className='invalid-input'
                    // data-sb-feedback='phone:required'
                  >
                    A valid phone number is required.
                  </div>
                )}
              </div>
              {/* <!-- Message input--> */}
              <div className='form-floating mb-3'>
                <textarea
                  className='form-control'
                  id='message'
                  type='text'
                  placeholder='Enter your message here...'
                  // style='height: 10rem'
                  // data-sb-validations='required'
                  value={msg}
                  onChange={msgChanged}
                  onBlur={msgTouched}
                ></textarea>
                <label htmlFor='message'>Message</label>
                {isMsgError && (
                  <div
                    className='invalid-input'
                    // data-sb-feedback='message:required'
                  >
                    A message is required.
                  </div>
                )}
              </div>
              {/* <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted--> */}
              <div className='d-none' id='submitSuccessMessage'>
                <div className='text-center mb-3'>
                  <div className='fw-bolder'>Form submission successful!</div>
                  {/* To activate this form, sign up at
                  <br />
                  <a href='https://startbootstrap.com/solution/contact-forms'>
                    https://startbootstrap.com/solution/contact-forms
                  </a> */}
                </div>
                ``
              </div>
              {/* <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form--> */}
              <div className='d-none' id='submitErrorMessage'>
                <div className='text-center text-danger mb-3'>
                  Error sending message!
                </div>
              </div>
              {/* <!-- Submit Button--> */}
              <button
                // className='btn btn-primary btn-xl disabled'
                id='submitButton'
                type='submit'
                onClick={submitHandler}
                disabled={!isValidForm}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
