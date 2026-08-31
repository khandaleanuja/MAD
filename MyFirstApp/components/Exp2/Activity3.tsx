// import { StatusBar, StyleSheet, Text, View } from "react-native";

// function Activity3(){
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content"/>

//       <Text style={styles.welcomeText}>
//         Welcome Anuja !!
//       </Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },

//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });


import {useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function Activity3(){
  const [name, setName] = useState('');

  return(
    <View style={styles.container}>

      <Text style={styles.title}>
        Enter your name :
      </Text>

      <TextInput style={styles.input} 
      placeholder='Enter name'
      value={name}
      onChangeText={setName}></TextInput>

      {name !== '' && (
        <Text style={styles.welcomeText}>
          Welcome {name}!
        </Text>
      )
      }
    </View>
  )
}


const styles = StyleSheet.create({
   container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 20, 
  }, 
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15, 
  }, 
  input: { 
    width: '80%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#999', 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    fontSize: 18, 
  }, 
  welcomeText: { 
    marginTop: 25, 
    fontSize: 28, 
    fontWeight: 'bold', 
  }, 
});


export default Activity3;