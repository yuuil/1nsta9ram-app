import React from "react";
import styled from "styled-components";
import constans from "../../constants";
import AuthButton from "../../components/AuthButton";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constans.width / 2.5}px;
  margin-bottom: 16px;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  margin-top: 24px;
  color: ${(props) => props.theme.blueColor};
`;

const AuthHome = ({ navigation }) => {
  return (
    <View>
      <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
      <AuthButton
        text={"Create New Account"}
        onPress={() => navigation.navigate("Signup")}
      />
      <Touchable onPress={() => navigation.navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log In</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  );
};

export default AuthHome;
