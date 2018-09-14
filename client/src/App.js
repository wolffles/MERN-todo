import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    //in order to get stuff from state and put into component properties we have to wrap the div in the provider
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <TodoList />
      </div>
      </Provider>
    );
  }
}

export default App;
