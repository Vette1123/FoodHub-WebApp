import React from 'react'
import classes from './Register.module.css'
import SignUpForm from '../components/SiginupForm/SignUpForm'
import NavBar from '../UI/navbar/NavBar'

const Register = () => {
  return (
    <section className={classes.register}>
      <NavBar />
      <SignUpForm />
    </section>
  )
}

export default Register
