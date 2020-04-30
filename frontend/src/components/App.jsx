import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showUploadModal: false
    };
  }

  onUploadClick = () => {
    this.setState({ showUploadModal: true });
  }

  handleUploadModalClose = () => {
    this.setState({ showUploadModal: false });
  }

  refresh = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;