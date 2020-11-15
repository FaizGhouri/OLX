import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import FrontPage from '../Components/home/front';
import Sign_Up from '../Components/Sell_login/Login';
import PostToAdd from '../Components/post/postCard.jsx';
import LoginPage from '../Components/loginpage/loginpage';
import PageRout from '../Components/page/cardPg'

class AppRouter extends React.Component {
    render() {
        return (
            <Router >
                <Route exact path='/' component={FrontPage} />
                <Route path='/Login' component={Sign_Up} />
                <Route path='/postCard' component={PostToAdd} />
                <Route path='/loginpage' component={LoginPage} />
                <Route path='/cardPg/:id' component={PageRout}/>

            </Router>
        )
    }
}


export default AppRouter;