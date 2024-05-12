import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {usePasswordFieldsState} from './context/PasswordContext';

const UserInpLButton = () => {
  const {length, setLength} = usePasswordFieldsState();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>Enter the password length </Text>
      <TextInput
        style={styles.input}
        placeholder="eg: 6"
        onChangeText={setLength}
        value={length}
      />
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
    color: 'white',
  },
  textStyling: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default UserInpLButton;
