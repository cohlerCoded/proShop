import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from './FormContainer'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <FormContainer>
      <h1>Sign In</h1>
    </FormContainer>
  )
}

export default LoginScreen
