import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AdvList from '../adv/AdvList';
import AdvDetailPage from '../adv/AdvDetailPage';
import Header from '../Header';

export default function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={AdvList} />
      <Route exact path="/:id" component={AdvDetailPage} />
    </Switch>
    </>
  );
}
