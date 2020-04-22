import React, {useState} from 'react';
import '../App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const changeHandler = evt => {

    const name = evt.target.name
    const value = evt.target.value
  
    setFormValues({
      ...formValues, 
      [name]:value
    })
  }

  return (
    <div className="App">
      <Form formValues={formValues} changeHandler={changeHandler}/>
    </div>
  )
}

export default App;
