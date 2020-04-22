import React, {useState, useEffect} from 'react';
import '../App.css';
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'

const url = "https://reqres.in/api/users"

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initalFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

// const initalUsers = [
//   {
//     name: 'Caleb',
//     email: 'Caleb@domain.net',
//     password: 'hemanfanXD'
//   }
// ]

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'name must be at least 5 characters long')
    .required('name is required'),
  email: yup
    .string()
    .email('a valid email is required')
    .required('email is required'),
  password: yup
    .string()
    .min(5, 'password must be at least 5 characters long')
    .required('password is required'),
  termsOfService: yup
    .bool()
    .required('you must accept the terms and conditions')
})

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [users, setUsers] = useState([])

  const changeHandler = evt => {

    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
  
    setFormValues({
      ...formValues, 
      [name]:value
    })
  }

  const checkBoxHandler = evt => {
    const name = evt.target.name
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      [name]: isChecked
    })
  }

  const postUser = user => {
    axios.post(url, user)
    .then(res => {
      setUsers([...users, res.data])
      // console.log(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  const submitHandler = evt => {
    evt.preventDefault()

    const newUser ={
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,

    }

    postUser(newUser)
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <Form 
        formValues={formValues} 
        changeHandler={changeHandler}
        checkBoxHandler={checkBoxHandler}
        submitHandler={submitHandler}
        disabled={disabled}
        formErrors={formErrors}
        />
      <h2>Users In system...</h2>
      {users.map(user => {
        return (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Unique ID: {user.id}</h3>
        </div>
        )
      })}
    </div>
  )
}

export default App;
