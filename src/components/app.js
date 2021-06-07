import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Download from '../routes/download';
import InstallationGuide from '../routes/installation';
import UsageGuide from '../routes/usage';

const App = () => {
  if (typeof window !== 'undefined') {
    // The debounce function receives our function as a parameter
    const debounce = fn => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  }

  // App
  return (
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
};

export default App;
