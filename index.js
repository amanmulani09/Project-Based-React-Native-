/**
 * @format
 */
<script src="http://192.168.0.101:8097"></script>
import {AppRegistry} from 'react-native';
// import App from './App';
// import AppPro from './AppPro';
// import FlexBoxPrac from './src/components/flexbox/FlexBoxPrac';
import ProjectTwoApp from './src/ProjectTwo/ProjectTwoApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProjectTwoApp);
