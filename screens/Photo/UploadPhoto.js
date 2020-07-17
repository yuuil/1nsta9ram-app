import React, { useState } from "react";
import { Alert, Image, ActivityIndicator } from "react-native";
import styled from "styled-components";
import styles from "../../styles";
import constants from "../../constants";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";
import { FEED_QUERY } from "../Tabs/Home";

const UPLOAD = gql`
  mutation upload($caption: String!, $files: [String!]!, $location: String) {
    upload(caption: $caption, files: $files, location: $location) {
      id
      caption
      location
    }
  }
`;

const View = styled.View`
  flex: 1;
`;
const Container = styled.View`
  padding: 24px;
  flex-direction: row;
`;
const Form = styled.View`
  justify-content: flex-start;
`;
const STextInput = styled.TextInput`
  margin-bottom: 8px;
  border: 0px solid ${styles.lightGreyColor};
  border-bottom-width: 1px;
  padding-bottom: 8px;
  width: ${constants.width - 180}px;
`;
const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.blueColor};
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

const UploadPhoto = ({ navigation }) => {
  const [loading, setIsLoading] = useState(false);
  const captionInput = useInput("");
  const locationInput = useInput("");
  const photo = navigation.getParam("photo");
  const [uploadMutation] = useMutation(UPLOAD, {
    refetchQueries: () => [{ query: FEED_QUERY }],
  });
  const handleSubmit = async () => {
    if (captionInput.value === "" || locationInput.value === "") {
      Alert.alert("All fields are required");
    }
    const formData = new FormData();
    photo.forEach((p) => {
      const name = p.filename;
      const [, type] = name.split(".");
      formData.append("file", {
        name,
        type: type.toLowerCase(),
        uri: p.uri,
      });
    });
    try {
      setIsLoading(true);
      const {
        data: { location },
      } = await axios.post("https://insta9ram-backend.herokuapp.com/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const {
        data: { upload },
      } = await uploadMutation({
        variables: {
          caption: captionInput.value,
          location: locationInput.value,
          files: location,
        },
      });
      if (upload.id) {
        navigation.navigate("TabNavigation");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't upload", "Try later");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View>
      <Container>
        <Image
          source={{ uri: photo[0].uri }}
          style={{ width: 80, height: 80, marginRight: 32 }}
        />
        <Form>
          <STextInput
            onChangeText={captionInput.onChange}
            value={captionInput.value}
            placeholder="Caption"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
            autoCorrect={false}
          />
          <STextInput
            onChangeText={locationInput.onChange}
            value={locationInput.value}
            placeholder="Location"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
            autoCorrect={false}
          />
          <Button onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text>Upload</Text>
            )}
          </Button>
        </Form>
      </Container>
    </View>
  );
};

export default UploadPhoto;
