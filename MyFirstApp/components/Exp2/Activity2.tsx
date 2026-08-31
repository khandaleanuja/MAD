import { StyleSheet, View } from "react-native";

function Activity2(){
  return (
    <View style={styles.container}>
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

export default Activity2;