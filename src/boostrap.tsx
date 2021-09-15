import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function Boostrap() {
//   return (
//     <div>
//       Boostrap
//     </div>
//   );
// }

function render () {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();

const m = module as any;

if (m.hot) {
  m.hot.accept('./index.ts', render);
}
