import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Applications from './components/Applications';
import CreateApplication from './components/CreateApplication';
import UpdateApplication from './components/UpdateApplication';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="content">
                  <Route path="/" exact component={Applications} />
                  <Route path="/create" component={CreateApplication} />
                  <Route path="/update" component={UpdateApplication} />
                </div>
            </div>
        </Router>
    );
}

export default App;
