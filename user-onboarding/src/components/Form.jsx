import React from 'react'

const Form = props => {
    const {formValues, changeHandler} = props
    return (
        <form>
            <label>
                Name: <input
                    name='name'
                    value={formValues.name}
                    type='text'
                    onChange={changeHandler}

                />
            </label>
        </form>
    )
}

export default Form