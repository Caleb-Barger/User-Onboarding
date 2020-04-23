import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '0 auto',
        marginTop: 20,
        backgroundColor: 'GhostWhite',
    },
    text: {
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
    }
})

const Form = props => {
    const {
        formValues,
        changeHandler, 
        checkBoxHandler,
        submitHandler,
        disabled,
        formErrors,
        } = props

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <form>
                    <Typography varient='h2' gutterBottom>
                        User Onboarding Form
                    </Typography>
                    <label>
                        <Typography>
                            {formErrors.name}
                            {formErrors.email}
                            {formErrors.password}
                            {formErrors.termsOfService}
                        </Typography>
                        <Typography>
                        Name: <input
                            name='name'
                            value={formValues.name}
                            type='text'
                            onChange={changeHandler}
                        />
                        </Typography>
                        <Typography>
                            Email: <input
                                name='email'
                                value={formValues.email}
                                type='email'
                                onChange={changeHandler}
                            />
                        </Typography>
                        <Typography>
                             Password: <input
                                name='password'
                                value={formValues.password}
                                type='password'
                                onChange={changeHandler}
                            />
                        </Typography>
                        <Typography>
                             Terms of Service <input
                                name='termsOfService'
                                checked={formValues.termsOfService}
                                type='checkbox'
                                onChange={checkBoxHandler}
                            />
                        </Typography>       
                        <CardActions>
                            <Button
                                disabled={disabled} 
                                onClick={submitHandler}
                            >Submit!</Button>
                        </CardActions>         
                    </label>
                </form>
            </CardContent>
        </Card>
    )
}

export default Form