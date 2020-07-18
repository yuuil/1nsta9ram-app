import React from "react";
import PropTypes from "prop-types";
import { Text, Image } from "react-native";
import styled from "styled-components";
import styles from "../styles";

const View = styled.View`
  flex-direction: row;
  padding: 0 4px;
  margin: 8px 4px;
  align-items: center;
`;
const Touchable = styled.TouchableOpacity``;
const Username = styled.Text`
  font-weight: 500;
  margin: 0 8px;
`;
const CommentContainer = styled.View`
  margin: 4px;
`;
const Content = styled.View`
  flex-direction: row;
`;
const CreatedAt = styled.Text`
  padding: 4px 8px;
  font-weight: 500;
  color: ${styles.darkGreyColor};
`;

const Comment = ({ user, text, createdAt }) => {
  const createDate = new Date(createdAt);
  const createDateStr = [
    createDate.getFullYear(),
    createDate.getMonth()+1,
    createDate.getDate(),
  ].join(".");
  return (
    <View>
      <Touchable>
        <Image
          style={{ width: 40, height: 40, borderRadius: 50 }}
          source={{ uri: user.avatar }}
        />
      </Touchable>
      <CommentContainer>
        <Content>
          <Touchable>
            <Username>{user.username}</Username>
          </Touchable>
          <Text>{text}</Text>
        </Content>
        <CreatedAt>{createDateStr}</CreatedAt>
      </CommentContainer>
    </View>
  );
};

Comment.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
