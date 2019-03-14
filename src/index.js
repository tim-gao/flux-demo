import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import ColorSwitch from './component/ColorSwitch';
import ColorSwitch1 from './component/ColorSwitch1';

ReactDOM.render(<ColorSwitch1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
