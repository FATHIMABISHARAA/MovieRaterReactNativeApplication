// import React from 'react';
// import MovieList from './components/list';
// import Detail from './components/detail';
// import { createAppContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/native-stack';

// const AppNavigator=createStackNavigator({
//   MovieList:{screen:MovieList},
//   Detail:{screen:Detail},
// })

// const App = createAppContainer(AppNavigator);
// export default  App;
 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './components/list';
import Detail from './components/detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MovieList" component={MovieList} />
        {/* <Stack.Screen name="Detail" component={Detail} /> */}
        <Stack.Screen
  name="Detail"
  component={Detail}
  options={({ route }) => ({
    title: route.params?.movie?.title ?? 'Movie Details',
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
  })}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;