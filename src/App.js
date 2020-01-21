import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';
import HomePage from './pages/home.component';
import AboutPage from './pages/about.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
