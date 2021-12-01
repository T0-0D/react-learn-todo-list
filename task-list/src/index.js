import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import components
import App from './App';

// DATAオブジェクトの作成
const DATA = [
  {　id: "todo-0", name: "Eat", completed: true　},
  {　id: "todo-1", name: "Sleep", completed: false　},
  {　id: "todo-2", name: "Repeat", completed: false　}
];


ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
