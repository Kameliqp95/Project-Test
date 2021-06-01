import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import LoginForm from './assets/LoginForm';
import RegistrationForm from './assets/RegistrationForm';
import { NavLink, Switch, Route } from 'react-router-dom';
import ProfileView from './assets/ProfileView';
import CommentsView from './assets/CommentsView';


function App() {
  return (
    
    <div className="App">
        <Navigation />
        <Main />
    </div>
  );
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/register'>Register</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/login'>Login</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/profile'>My profile</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/comments'>Comments</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Hello!</h1>
  </div>
);

const Login = () => (
  <LoginForm />
);

const Register = () => (
<RegistrationForm />
);

const Profile = () => (
  <ProfileView />
  );

const Comments = () => (
  <CommentsView />
  );
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/register' component={Register}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path='/comments' component={Comments}></Route>
  </Switch>
);



export default App;
