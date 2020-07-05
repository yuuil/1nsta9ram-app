import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

const Container = styled.TouchableOpacity``;
const Text = styled.Text``;

const MessagesLink = ({navigation}) => {
  return (
    <Container onPress={() => navigation.navigate("MessageNavigation")}>
      <Text>Hello</Text>
    </Container>
  );
};

export default withNavigation(MessagesLink);
