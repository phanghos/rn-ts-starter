/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/components/screens/App';
import { name as appName } from './app.json';

if (__DEV__) {
  require('./src/utils/reactotron.config');
}

AppRegistry.registerComponent(appName, () => App);
