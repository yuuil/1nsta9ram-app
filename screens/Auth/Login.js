import React from 'react';
import styled from 'styled-components';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const Login = () => {
  return (
    <View>
      <Text>Log In</Text>
    </View>
  );
};

export default Login;