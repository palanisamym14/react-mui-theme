import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_THEME } from '../../gql/query';
import { red } from '@mui/material/colors';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import {Colors} from './color';

export interface LayoutProps {
    children: React.ReactNode
}

const ThemeProvider: React.FC<LayoutProps> = ({ children })=> {

    const [getThemeData, { loading, error, data }] = useLazyQuery(GET_THEME);
    
    React.useEffect(() => {
        if (sessionStorage.getItem("token") && !data) {
            getThemeData()
        }
    }, []);
    console.log(data?.getTheme?.primary)
    const theme = createTheme({
        palette: {
            primary: {
                main: Colors[data?.getTheme?.primary] || red[500],
            },
            secondary:{
                main: Colors[data?.getTheme?.secondary]|| red[500]
            }
        },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <div>`Error! ${error}`</div>;
    
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider;