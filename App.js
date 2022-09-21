// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CodePush from 'react-native-code-push';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen hererererer</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

class App extends React.Component {
  componentDidMount() {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

let codePushOptions = {
  checkDrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default App = CodePush(codePushOptions)(App);
