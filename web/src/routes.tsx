import  React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanMap from './pages/OrphanMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/map" component={OrphanMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;