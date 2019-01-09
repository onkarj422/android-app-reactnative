import Home from '../app/home';
import {
    createStackNavigator
} from 'react-navigation';
import Attendance from '../app/attendance/index';
import { uiTheme } from '../../customization/theme';
import { getTheme } from 'react-native-material-ui';

const theme = getTheme(uiTheme);

export const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Attendance: {
        screen: Attendance
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: uiTheme.palette.primaryColor,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});