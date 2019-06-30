import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Foo = () => <div>sfsdf</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Foo} exact={true} />
      <Route path="/create" component={Foo} />
      <Route path="/edit" component={Foo} />
      <Route path="/help" component={Foo} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
