import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {PasswordGenerator} from './Logic/PasswordGenerator.js';
import {usePasswordFieldsState} from './context/PasswordContext.jsx';

const SubmitSection = () => {
  const {
    length,
    is1,
    is2,
    is3,
    is4,
    setPassword,
    setLength,
    setIs1,
    setIs2,
    setIs3,
    setIs4,
  } = usePasswordFieldsState();

  const handelPasswordGeneration = () => {
    let pass = PasswordGenerator(length, is1, is2, is3, is4);
    setPassword(pass);
  };

  const handelReset = () => {
    setPassword('');
    setLength(0);
    setIs1(false);
    setIs2(false);
    setIs3(false);
    setIs4(false);
  };

  return (
    <View style={styles.SubmitBtncontainer}>
      <Pressable style={styles.button} onPress={handelPasswordGeneration}>
        <Text style={styles.text}>Generate</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handelReset}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  SubmitBtncontainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
export default SubmitSection;
