import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import styles from "../styles";
import { Platform } from "react-native";
import NavIcon from "./NavIcon";

const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;
const Text = styled.Text``;

const MessagesLink = ({ navigation }) => {
  return (
    <Container onPress={() => navigation.navigate("MessageNavigation")}>
      <NavIcon
        name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
        color={styles.blackColor}
        size={26}
      />
    </Container>
  );
};

export default withNavigation(MessagesLink);
