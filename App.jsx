import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainContainer from './src/components/MainContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>Password Generator</Text>
      <MainContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AB2FF',
    flex: 1,
  },
  textStyling: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    margin: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    textAlign: 'center',
    paddingVertical: 3,
  },
});

export default App;
