import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Footer() {
    return (
        <Jumbotron fluid  className="footer">
            <Container fluid>
                <h4>Footer</h4>
                <p className="lead">Footer content.</p>
            </Container>
        </Jumbotron>
    );
}

export default Footer;