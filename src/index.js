import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import movies from './components/movies.js';

ReactDOM.render(<App movies={movies}/>, document.getElementById('root'));
registerServiceWorker();
