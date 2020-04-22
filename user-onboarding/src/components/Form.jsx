import React from 'react'

const Form = props => {
    const {formValues, changeHandler} = props
    return (
        <form className='form'>
            <label>
                Name: <input
                    name='name'
                    value={formValues.name}
                    type='text'
                    onChange={changeHandler}
                />
                <br/>
                Email: <input
                    name='email'
                    value={formValues.email}
                    type='email'
                    onChange={changeHandler}
                />
                <br/>
                Password: <input
                    name='password'
                    value={formValues.password}
                    type='password'
                    onChange={changeHandler}
                />
                <br/>
                Terms of Service <input
                    name='termsOfService'
                    value={formValues.termsOfService}
                    type='checkbox'
                    onChange={changeHandler}
                />
                <br/>
            </label>
        </form>
    )
}

export default Form