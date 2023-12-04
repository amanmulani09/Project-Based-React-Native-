/**
 * @format
 */
<script src="http://192.168.0.101:8097"></script>
import {AppRegistry} from 'react-native';
// import App from './App';
// import AppPro from './AppPro';
// import FlexBoxPrac from './src/components/flexbox/FlexBoxPrac';
// import ProjectTwoApp from './src/ProjectTwo/ProjectTwoApp';
// import ProjectThreeApp from './src/ProjectThree/ProjectThreeApp';
// import ProjectFourApp from './src/ProjectFour/ProjectFourApp';
// import ProjectFourSelfApp from './src/ProjectFour/ProjectFourSelfApp';
// import ProjectFiveApp from './src/ProjectFive/ProjectFiveApp';
import ProjectSixApp from './src/ProjectSix/ProjectSixSelfApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProjectSixApp);
