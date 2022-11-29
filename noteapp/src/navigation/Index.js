import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ViewNotes from '../screens/ViewNotes'
// import AddNotes from '../screens/AddNotes'
import Splash from '../screens/Splash'
import AddNotes2 from '../screens/AddNotes2'

const StackNavigator = createStackNavigator({
    Splash: {
        screen: Splash
    },
    ViewNotes: {
        screen: ViewNotes
    },
    AddNotes2: {
        screen: AddNotes2
    }
},
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
        mode: 'modal'
    }
)

export default createAppContainer(StackNavigator)