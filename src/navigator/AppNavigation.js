import { AppNavigator } from './AppNavigator';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

const App = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

export const AppNavigation = connect(mapStateToProps)(App);