import { Route, Navigate } from 'react-router-dom';

import { createTheme, ThemeProvider as MuiThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


function ThemeProvider({ children }: any) {

    const outerTheme = createTheme({
        palette: {
            secondary: {
                main: orange[500],
            },
        },
    });
    
    return <MuiThemeProvider theme={outerTheme}>
       {children}
    </MuiThemeProvider>;
}

export default ThemeProvider;