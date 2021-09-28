import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CompraFinalizada from './pages/compra-finalizada'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={CompraFinalizada} />
            </Switch>
        </BrowserRouter>
    )
}
