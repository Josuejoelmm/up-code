import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from '../components/Layout';
import HomeContainer from '../pages/Home/HomeContainer';
import { ThemeProvider } from "@material-ui/core";
import theme from '../themeConfig/theme';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Switch>
                        <Route path="/" component={HomeContainer} />
                    </Switch>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;