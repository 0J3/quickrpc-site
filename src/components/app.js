import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Download from '../routes/download';
import InstallationGuide from '../routes/installation';
import UsageGuide from '../routes/usage';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Download path="/download" />
      <InstallationGuide path="/installation-guide" />
      <UsageGuide path="/usage-guide" />
    </Router>
  </div>
);

export default App;
