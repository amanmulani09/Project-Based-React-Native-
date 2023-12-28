/**
 * @format
 */
<script src="http://192.168.0.101:8097"></script>
import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerService';

// import App from './App';
// import AppPro from './AppPro';
// import FlexBoxPrac from './src/components/flexbox/FlexBoxPrac';
// import ProjectTwoApp from './src/ProjectTwo/ProjectTwoApp';
// import ProjectThreeApp from './src/ProjectThree/ProjectThreeApp';
// import ProjectFourApp from './src/ProjectFour/ProjectFourApp';
// import ProjectFourSelfApp from './src/ProjectFour/ProjectFourSelfApp';
// import ProjectFiveApp from './src/ProjectFive/ProjectFiveApp';
// import ProjectSixApp from './src/ProjectSix/ProjectSixSelfApp';
// import ProjectSixApp from './src/ProjectSix/ProjectSixApp';
// import ProjectSevenAppSelf from './src/ProjectSeven/ProjectSevenAppSelf';
// import ProjectSevenApp from './src/ProjectSeven/ProjectSevenApp';
// import ProjectEightApp from './src/ProjectEight/ProjectEightApp';
// import App from './src/React Natigation/App';
// import App from './src/core components/App'
import App from './src/ProjectTen/App';
//Self Practice projects

// import App from './src/NavigationPractice01/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => playbackService);