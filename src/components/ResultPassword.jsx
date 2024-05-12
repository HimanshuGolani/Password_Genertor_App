import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {usePasswordFieldsState} from './context/PasswordContext';

const ResultPassword = () => {
  const {password} = usePasswordFieldsState();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>
        The Password is :
        <Text style={styles.resultBox}>
          {password
            ? password
            : 'Fill the above parameres to generate the password..'}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    color: 'white',
    borderTopColor: 'white',
    borderTopWidth: 3,
  },
  textStyling: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'white',
  },
  resultBox: {
    backgroundColor: '#F1F1F1',
    color: 'black',
    height: 300,
    width: 300,
  },
});

export default ResultPassword;
