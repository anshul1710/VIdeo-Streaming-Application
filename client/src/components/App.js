import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Navbar from './Navbar';
import history from '../history';
const App =() =>{
    return(
        <div className="ui container">
           
            <Router history={history}>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default App;