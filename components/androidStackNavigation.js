import AndroidScreen from '../components/androidScreen';
import AndroidDetailScreen from '../components/androidDetailScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const Screen = createStackNavigator({
    "Android_Screen": {
        screen: AndroidScreen
    },
    "Android_Detail_Screen": {
        screen: AndroidDetailScreen
    }
});
const App = createAppContainer(Screen);
export default App