import { BrowserRouter, Switch, Route } from 'react-router-dom'

import inicio from './pages/inicial/index'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={inicio} />
      </Switch>
    </BrowserRouter>
  );
}
