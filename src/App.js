import React from "react";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Competitions from "./competitions/Competitions";
import TeamSquad from "./teamSquad/TeamSquad";
import StadiumLocation from "./location/StadiumLocation";
import Blog from "./blog/Blog";
import Article from "./blog/Article";
import AdminPanel from './pages/admin/AdminPanel';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/blog'} component={Blog}/>
                <Route exact path={'/article/:id'} component={Article}/>
                <Route exact path={'/competitions'} component={Competitions}/>
                <Route exact path={'/squad'} component={TeamSquad}/>
                <Route exact path={'/contact'} component={StadiumLocation}/>
                <Route path="/admin" component={AdminPanel} />
                <Route exact path={'*'} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
