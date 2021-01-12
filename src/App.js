import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './views/home';
import DetailView from './views/detail';
import NavigationBar from './components/navigation-bar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path={'/'} component={HomeView} />
          <Route path={'/details/:id'} component={DetailView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
