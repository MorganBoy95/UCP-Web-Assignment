import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Virtual} from './Virtual';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';



function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Virtual} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
