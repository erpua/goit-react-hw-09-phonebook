import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import AppBar from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
/* import Container from './components/Container';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import SignInView from './views/LoginView/SignInView';
import SignUpView from './views/RegisterView/SignUpView'; */
import './global.css';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const SignInView = lazy(() => import('./views/LoginView/SignInView'));
const SignUpView = lazy(() => import('./views/RegisterView/SignUpView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<h2> ... Downloading ...</h2>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={SignUpView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={SignInView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
