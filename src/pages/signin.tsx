import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION, GET_THEME } from '../gql/query';
import { useNavigate } from "react-router-dom";
import { setWithExpiry } from './../util'

export default function SignIn() {
    const navigate = useNavigate();
    const [loginUser, { error: nwError }] =
        useMutation(LOGIN_MUTATION, {
            update: (_, { data: { login } }: any) => {
                setWithExpiry('token', login.token);
                navigate("/")
            },
            refetchQueries: [{ query: GET_THEME }]
        });


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        loginUser({
            variables: {
                body: {
                    email: data.get('email'),
                    password: data.get('password'),
                }
            }
        });
    };


    return (
        <Container component="main" maxWidth="xs">
            <div>{JSON.stringify(nwError?.message)}</div>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}