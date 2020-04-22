import React from 'react'

const Form = props => {
    const {
        formValues,
        changeHandler, 
        checkBoxHandler,
        submitHandler,
        disabled,
        formErrors,
        } = props
    return (
        <form className='form'>
            <label>
                <div className='errors'>
                    {formErrors.name}
                    <br />
                    {formErrors.email}
                    <br />
                    {formErrors.password}
                    <br />
                    {formErrors.termsOfService}
                    <br />
                </div>
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
                    checked={formValues.termsOfService}
                    type='checkbox'
                    onChange={checkBoxHandler}
                />
                <br/>
                Submit: <button
                    disabled={disabled} 
                    onClick={submitHandler}
                >Submit!</button>
            </label>
        </form>
    )
}

export default Form