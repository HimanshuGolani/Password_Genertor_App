import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {usePasswordFieldsState} from './context/PasswordContext';

const ChooseButton = () => {
  const {is1, setIs1, is2, setIs2, is3, setIs3, is4, setIs4} =
    usePasswordFieldsState();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyling}>Include Lowercase Letters</Text>
        <RadioButton
          color="red"
          status={is1 === true ? 'checked' : 'unchecked'}
          onPress={() => setIs1(!is1)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyling}>Include Uppercase Letters</Text>
        <RadioButton
          color="blue"
          status={is2 === true ? 'checked' : 'unchecked'}
          onPress={() => setIs2(!is2)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyling}>Include Numbers</Text>
        <RadioButton
          color="green"
          status={is3 === true ? 'checked' : 'unchecked'}
          onPress={() => setIs3(!is3)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyling}>Include Symbols</Text>
        <RadioButton
          color="yellow"
          status={is4 === true ? 'checked' : 'unchecked'}
          onPress={() => setIs4(!is4)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  textStyling: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default ChooseButton;
