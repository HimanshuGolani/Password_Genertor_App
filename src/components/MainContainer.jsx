import React from 'react';
import {View} from 'react-native';
import ChooseButton from './ChooseButton';
import UserInpLButton from './UserInpLButton';
import ResultPassword from './ResultPassword';
import PasswordFieldsProvider from './context/PasswordContext.jsx';
import SubmitSection from './SubmitSection.jsx';
const MainContainer = () => {
  return (
    // Used the context api to cerculate the inputs fileds
    <PasswordFieldsProvider>
      <View>
        {/* input length of the password  */}
        <UserInpLButton />
        {/*  options renderding is done here */}
        <ChooseButton />

        {/* Result Screen  */}
        <ResultPassword />
        {/* Buttons to run the program */}
        <SubmitSection />
      </View>
    </PasswordFieldsProvider>
  );
};

export default MainContainer;
