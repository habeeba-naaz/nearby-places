import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/react-google-maps-search" component={Home} />
            <Route exact path="/react-google-maps-search/search" component={Search} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
