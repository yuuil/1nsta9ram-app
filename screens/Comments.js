import React from "react";
import PropTypes from "prop-types";
import Comment from "../components/Comment";
import { ScrollView } from "react-native";

const Comments = ({ navigation }) => {
  const comments = navigation.getParam("comments", []);
  return (
    <ScrollView>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ScrollView>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    })
  ),
};

export default Comments;
