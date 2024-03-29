import React from 'react'
import classes from './FormGroup.module.css'

const FormGroup = (props) => {
  const {
    type,
    name,
    valueChangedHandler,
    inputBlurHandler,
    enteredValue,
    inputHasError,
    errMsg,
  } = props

  return (
    <div
      className={`${classes['form-control']} ${
        inputHasError ? classes.invalid : ''
      }`}
    >
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        placeholder={props.placeholder || name}
        onChange={valueChangedHandler}
        onBlur={inputBlurHandler}
        value={enteredValue}
      />
      {inputHasError && <p>{errMsg}</p>}
    </div>
  )
}

export default FormGroup
