import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main(props) {
    return (
        <div className="main">
            <Header/>
            <Container className="main-wrapper bg-light">
                <h2>Hello Main!</h2>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </Container>
            <Footer/>
        </div>
    );
}

export default Main;