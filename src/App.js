import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import NavbarComponent from './componentes/navbar/navbar-component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from './views/404/404-view';
import Home from './views/home/home-view.jsx';
import Hoy from './views/hoy/hoy-view.jsx';
import ProximaSemana from './views/nextweek/nextweek-view.jsx';
import Completadas from './views/completadas/completadas-view.jsx';


function App() {
  return (
    <BrowserRouter>
    <Container className="container">
      <Row noGutters={true}>
        <Col  md={3} lg={3} sm={3}  className="navbar-container">
            <NavbarComponent />
        </Col>

        <Col  md={9} lg={9}  sm={9}>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/hoy">
                <Hoy />
            </Route>
            <Route exact path="/proxima-semana">
              <ProximaSemana />
            </Route>
            <Route exact path="/completadas">
              <Completadas />
            </Route>
            <Route >
              <NotFoundPage />
            </Route>

        </Switch>
        </Col>
      </Row>
    </Container>
    </BrowserRouter>

  );
}

export default App;
