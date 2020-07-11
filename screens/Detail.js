import React from "react";
import styled from "styled-components";

const View = styled.View``;
const Text = styled.Text``;

const Detail = ({ navigation }) => {
  return (
    <View>
      <Text>I shoudl fetch for : {navigation.getParam("id")}</Text>
    </View>
  );
};

export default Detail;
