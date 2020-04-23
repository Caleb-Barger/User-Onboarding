import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '0 auto',
        boxShadow: '2 2 2 black',
        marginTop: '20px',
        backgroundColor: 'FloralWhite'
    }
})

const UserCard = props => {
    const {user, key} = props
    const classes = useStyles()
    return (
        <div className='user-card'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography>
                        Name: {user.name}
                    </Typography>
                    <Typography>
                        Email: {user.email}
                    </Typography>
                    <Typography>
                        Unique ID: {user.id}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    )
}

export default UserCard