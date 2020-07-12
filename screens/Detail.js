import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "../fragment";
import Loader from "../components/Loader";
import Post from "../components/Post";

const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

const View = styled.View``;
const Text = styled.Text``;

const Detail = ({ navigation }) => {
  const { loading, data } = useQuery(POST_DETAIL, {
    variables: { id: navigation.getParam("id") },
  });
  console.log(loading, data);
  return (
    <View>
      {loading ? <Loader /> : data && data.seeFullPost && <Post {...data.seeFullPost} /> }
    </View>
  );
};

export default Detail;
