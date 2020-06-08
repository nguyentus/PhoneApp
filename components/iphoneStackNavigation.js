import IphoneScreen from '../components/iphoneScreen';
import IphoneDetailScreen from '../components/iphoneDetailScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const Screen = createStackNavigator({
    "Iphone_Screen": {
        screen: IphoneScreen
    },
    "Iphone_Detail_Screen": {
        screen: IphoneDetailScreen
    }
});
const App = createAppContainer(Screen);
export default App