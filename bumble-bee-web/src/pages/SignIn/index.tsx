import React, {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {APP_ROUTES} from "../../constants";
import {Link} from "react-router-dom";
import formValidator from "../../utils/formValidator";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux/actions";
import {SignInRequestDto} from "../../models";

const INITIAL_SIGN_IN_FORM_DATA = {
    email: {value: '', validator: 'email', isRequired: true, disabled: false, error: null},
    password: {value: '', validator: 'text', isRequired: true, disabled: false, error: null}
}
const SignIn = () => {
    const dispatch = useDispatch()
    const [signInFormData, setSignInFormData] = useState(INITIAL_SIGN_IN_FORM_DATA)

    const onFormChange = (property: string, value: any) => {
        switch (property) {
            default:
                setSignInFormData({
                    ...signInFormData,
                    [property]: {
                        ...signInFormData[property as keyof typeof signInFormData],
                        value: value,
                        error: null
                    }
                })
        }
    }

    const onSignIn = async (data: any) => {
        const [validatedData, isValid] = await formValidator(data)
        setSignInFormData(validatedData)

        if(isValid) {
            const payload: SignInRequestDto = {
                email: validatedData.email.value,
                password: validatedData.password.value
            }
            // @ts-ignore
            dispatch(authActions.signIn(payload))
        }
    }

    return(
        <React.Fragment>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?bee,bumblebee)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Bumble Bee | Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                value={signInFormData.email.value}
                                onChange={(event) => onFormChange('email', event.target.value)}
                                error={!!signInFormData.email.error}
                                required={signInFormData.email.isRequired}
                                name="email"
                                autoComplete="email"
                                size="small"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                size="small"
                                autoComplete="current-password"
                                value={signInFormData.password.value}
                                onChange={(event) => onFormChange('password', event.target.value)}
                                error={!!signInFormData.password.error}
                                required={signInFormData.password.isRequired}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => onSignIn(signInFormData)}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs />
                                <Grid item>
                                    <Link to={APP_ROUTES.SIGN_UP}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default SignIn;