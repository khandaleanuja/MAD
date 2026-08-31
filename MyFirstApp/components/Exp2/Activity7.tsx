
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Activity7() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require('./profile.png')}
          style={styles.photo}
        />

        <Text style={styles.name}>
          Anuja Khandale
        </Text>

        <Text style={styles.prn}>
          PRN: 23UAM054
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
  },

  card: {
    width: 360,
    paddingVertical: 35,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  photo: {
   width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 10,
  },

  prn: {
    fontSize: 18,
    color: '#555555',
  },

});

export default Activity7;