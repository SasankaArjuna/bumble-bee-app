import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {APP_ROUTES, USER_ROLE_IDS} from "../../constants";
import {DateField } from "@mui/x-date-pickers";
import formValidator from "../../utils/formValidator";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/actions";
import {CreateUserDto} from "../../models";

const INITIAL_FORM_DATA = {
    firstName: {value: '', validator: 'text', isRequired: true, disabled: false, error: null},
    lastName: {value: '', validator: 'text', isRequired: true, disabled: false, error: null},
    email: {value: '', validator: 'email', isRequired: true, disabled: false, error: null},
    dob: {value: null, validator: 'text', isRequired: true, disabled: false, error: null},
    password: {value: '', validator: 'text', isRequired: true, disabled: false, error: null},
    confirmPassword: {value: '', validator: 'text', isRequired: true, disabled: false, error: null}
}

const SignUp = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const onFormChange = (property: string, value: any) => {
        switch (property) {
            default:
                setFormData({
                    ...formData,
                    [property]: {
                        ...formData[property as keyof typeof formData],
                        value: value,
                        error: null
                    }
                })
        }
    }

    const onSignUp = async (data: any) => {
        const [validatedData, isValid] = await formValidator(data)
        setFormData(validatedData)

        if(isValid) {
            const formData: CreateUserDto = {
                email: validatedData.email.value,
                password: validatedData.password.value,
                lastName: validatedData.lastName.value,
                firstName: validatedData.firstName.value,
                userRoleId: USER_ROLE_IDS.USER,
                dob: validatedData.dob.value
            }
            // @ts-ignore
            dispatch(userActions.SignUpUser(formData, () => {
                setFormData(INITIAL_FORM_DATA);
            }))
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
                            mx: 9,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Bumble Bee | Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        autoComplete="firstname"
                                        size="small"
                                        value={formData.firstName.value}
                                        onChange={(event) => onFormChange('firstName', event.target.value)}
                                        error={!!formData.firstName.error}
                                        required={formData.firstName.isRequired}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        autoComplete="lastname"
                                        size="small"
                                        value={formData.lastName.value}
                                        onChange={(event) => onFormChange('lastName', event.target.value)}
                                        error={!!formData.lastName.error}
                                        required={formData.lastName.isRequired}
                                    />
                                </Grid>
                            </Grid>

                            <DateField
                                size="small"
                                margin="normal"
                                fullWidth
                                label="Date of Birth"
                                format="DD-MM-YYYY"
                                color={!!formData.dob.error ? "error" : "primary"}
                                value={formData.dob.value}
                                onChange={(newValue) => onFormChange('dob', newValue)}
                                focused={!!formData.dob.error}
                                required={formData.dob.isRequired}
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type="email"
                                size="small"
                                value={formData.email.value}
                                onChange={(event) => onFormChange('email', event.target.value)}
                                error={!!formData.email.error}
                                required={formData.email.isRequired}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                size="small"
                                value={formData.password.value}
                                onChange={(event) => onFormChange('password', event.target.value)}
                                error={!!formData.password.error}
                                required={formData.password.isRequired}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="confirmPassword"
                                id="confirmPassword"
                                size="small"
                                value={formData.confirmPassword.value}
                                onChange={(event) => onFormChange('confirmPassword', event.target.value)}
                                error={!!formData.confirmPassword.error}
                                required={formData.confirmPassword.isRequired}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => onSignUp(formData)}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs />
                                <Grid item>
                                    <Link to={APP_ROUTES.ROOT}>
                                        {"Do have an account? Sign In"}
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

export default SignUp