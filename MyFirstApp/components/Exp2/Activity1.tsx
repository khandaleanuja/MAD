
import { StatusBar, StyleSheet, Text, View } from "react-native";

function Activity1(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>

      <Text style={styles.welcomeText}>
        Welcome to React Native !!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Activity1;
