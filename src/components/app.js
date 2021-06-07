import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Download from '../routes/download';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Download path="/download/" />
    </Router>
  </div>
);

export default App;
