import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/helloworld.js';
import Greeter from './components/greeter.js';
import Counterizer from './components/counterizer.js';
import HelloWorldApp from './components/helloworldapp.js';
import Counter from './components/counter.js';
import Index from './components/index.js';

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
