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
  console.info(m)
  m.hot.accept('./App.tsx', render);
}
