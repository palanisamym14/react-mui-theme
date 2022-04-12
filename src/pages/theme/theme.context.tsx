import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_THEME } from '../../gql/query';
import { red } from '@mui/material/colors';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { Colors } from './color';


export interface LayoutProps {
    children: React.ReactNode
}

const ThemeProvider: React.FC<LayoutProps> = ({ children }) => {

    const { loading, error, data } = useQuery(GET_THEME);

    const theme = createTheme({
        palette: {
            primary: {
                main: Colors[data?.getTheme?.primary] || red[500],
            },
            secondary: {
                main: Colors[data?.getTheme?.secondary] || red[500]
            }
        },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <div>`Error! ${error}`</div>;

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider;