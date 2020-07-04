import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const AuthHome = ({navigation}) => {
  return (
    <View>
      <Text>Auth Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Singup")}>
        <Text>Go to Singup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHome;