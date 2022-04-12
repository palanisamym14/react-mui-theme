import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Colors } from './color';
import { useMutation } from '@apollo/client';
import { GET_THEME, THEME_APPLY_MUTATION } from '../../gql/query';
import Grid from '@mui/material/Grid';
import { LoadingButton } from '@mui/lab';


export default function ThemeUI({ primaryColor, secondaryColor, onClose }: any) {
    const [applyTheme, { loading, error: nwError }] =
        useMutation(THEME_APPLY_MUTATION, { onCompleted: () => onClose(), refetchQueries: [{ query: GET_THEME }] });
    const theme = createTheme({
        palette: {
            primary: {
                main: Colors[primaryColor] || Colors['blue'],
            },
            secondary: {
                main: Colors[secondaryColor] || Colors['blue'],
            }
        },
    });
    const onSaveClick = () => {
        const body = {
            primary: primaryColor, secondary: secondaryColor,
        }
        applyTheme({ variables: { body } })

    }
    return (
        <React.Fragment>
            <Grid container mt={6}>
                <LoadingButton variant="outlined" size="medium" onClick={() => onSaveClick()} loading={loading} disabled={loading}>
                    Save Theme Colors
                </LoadingButton>
            </Grid>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="secondary"  >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </React.Fragment>
    );
}