import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './routes';

import './app.scss';

function App() {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>
      <Router>
        {/* <Route path="/button"></Route> */}
        <div className="layout">
          <div className="layout-side">
            {routes.map(({ name, path }) => {
              return (
                <div>
                  <Link to={path as string}>{name}</Link>
                </div>
              );
            })}
          </div>
          <div className="layout-content">
            {routes.map(({ name, ...props }) => {
              return <Route {...props} key={name} />;
            })}
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
