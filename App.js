import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

/* Imports Screens */
import RegisterScreens from './screens/RegisterScreen';
import LoginScreens from './screens/LoginScreens';
import ListProductScreen from './screens/ListProductScreen';
import ProfilScreen from './screens/ProfilScreen';
import RecipeScreen from './screens/RecipeScreen';

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColo: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./assets/logo_vert.png')} style={{ height: 120, width: 120 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Register:{
    screen: RegisterScreens,
    navigationOptions: {
      drawerLockMode: 'locked-open',
      drawerLabel: () => null
    }
  },
  Login:{
    screen: LoginScreens,
    navigationOptions: {
      drawerLockMode: 'locked-open',
      drawerLabel: () => null
    }
  },
  Profil:ProfilScreen,
  ListProduct:ListProductScreen,
  Recipe: RecipeScreen
}, {
  contentComponent: CustomDrawerComponent
})
