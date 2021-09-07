import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';


function App() {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>
      <Router>
        {/* <Route path="/button"></Route> */}
        {routes.map(({ name, ...props }) => {

          return <Route {...props} key={name} />;
        })}
      </Router>
    </Suspense>
  );
}

export default App;
