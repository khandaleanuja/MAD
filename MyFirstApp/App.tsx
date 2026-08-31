// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import React from 'react';

// import {
//   NavigationContainer,
// } from '@react-navigation/native';

// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';

// import HomeScreen from './screens/HomeScreen';

// import Exp1Activity1 from './components/Exp1/Activity1';


// import Exp2Activity1 from './components/Exp2/Activity1';
// import Exp2Activity2 from './components/Exp2/Activity2';
// import Exp2Activity3 from './components/Exp2/Activity3';
// import Exp2Activity4 from './components/Exp2/Activity4';
// import Exp2Activity5 from './components/Exp2/Activity5';
// import Exp2Activity6 from './components/Exp2/Activity6';
// import Exp2Activity7 from './components/Exp2/Activity7';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator>

//         {/* Home Page */}

//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'Experiments',
//           }}
//         />

//         {/* Experiment 1 */}

//         <Stack.Screen
//           name="Exp1Activity1"
//           component={Exp1Activity1}
//           options={{
//             title: 'Activity 1',
//           }}
//         />

//         {/* Experiment 2 */}

//         <Stack.Screen
//           name="Exp2Activity1"
//           component={Exp2Activity1}
//           options={{
//             title: 'Activity 1',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity2"
//           component={Exp2Activity2}
//           options={{
//             title: 'Activity 2',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity3"
//           component={Exp2Activity3}
//           options={{
//             title: 'Activity 3',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity4"
//           component={Exp2Activity4}
//           options={{
//             title: 'Activity 4',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity5"
//           component={Exp2Activity5}
//           options={{
//             title: 'Activity 5',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity6"
//           component={Exp2Activity6}
//           options={{
//             title: 'Activity 6',
//           }}
//         />

//         <Stack.Screen
//           name="Exp2Activity7"
//           component={Exp2Activity7}
//           options={{
//             title: 'Activity 7',
//           }}
//         />

//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }

// export default App;



// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';

// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';

// import HomeScreen from './screens/HomeScreen';
// import ExperimentScreen from './screens/ExperimentScreen';
// import ActivityScreen from './screens/ActivityScreen';

// import { RootStackParamList } from './navigation/types';

// const Stack =
//   createNativeStackNavigator<RootStackParamList>();

// function App(){
//   return (
//     <NavigationContainer>

//       <Stack.Navigator>

//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'React Native Experiments',
//           }}
//         />

//         <Stack.Screen
//           name="Experiment"
//           component={ExperimentScreen}
//           options={({ route }) => ({
//             title: route.params.title,
//           })}
//         />

//         <Stack.Screen
//           name="Activity"
//           component={ActivityScreen}
//           options={({ route }) => ({
//             title: route.params.title,
//           })}
//         />

//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// };

// export default App;




// // adb -s emulator-5554 emu kill
// // adb kill-server
// // adb devices
// npx react-native start --reset-cache









// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';

// import Login from './components/Exp4/Login';
// import Registration from './components/Exp4/Registration';

// function App() {
//   const [screen, setScreen] = useState('login');

//   const handleLoginSuccess = () => {
//     setScreen('registration');
//   };

//   return (
//     <View style={styles.container}>

//       {screen === 'login' ? (
//         <Login onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <Registration />
//       )}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;






import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
// import CustomButton from './components/Exp5/CustomButton';
// import CustomHeader from './components/Exp5/CustomHeader';
// import CustomCard from './components/Exp5/CustomCard';
import CustomInput from './components/Exp5/CustomInput';


function App(){

  const [name, setName] = useState('');
  return (
    <View style={styles.container}>

      {/* Button */}
      {/* <CustomButton
        title="Click Me"
        onPress={() => Alert.alert('Button Clicked!')}
      /> */}


      {/* Header */}
      {/* <CustomHeader title="Welcome to My App" /> */}


      {/* Card */}
      {/* <CustomCard
        title="Student Information"
        description="Name: Anuja Khandale"
      /> */}

      {/* Input */}
      <CustomInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;