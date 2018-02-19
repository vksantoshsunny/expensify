import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboard = () => (
    <div>
    This is an Expense Dashboard <Link to="/Create">Go to Create</Link>
    </div>
)

const ExpenseCreate = () => (
    <div>
    This is an Expense Create <Link to="/">Go to Home</Link>
    </div>
)

const NotFoundPage = () => (
    <div>
    404! <Link to="/">Go to Home</Link>
    </div>
)

const Header = () => (
    <h1>
    This is a Header
    </h1>
)

const routes = (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenseDashboard} exact={true}/>
    <Route path="/Create" component={ExpenseCreate}  />
    <Route  component={NotFoundPage}  />
    </Switch>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
