import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/homepage/home.page';
import CategoryDetailPage from './pages/categorydetail/categorydetail.page';
import './assets/css/app.scss';

library.add(fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />     
          <Route exact path="/category/:catid" component={ CategoryDetailPage } />                   
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
