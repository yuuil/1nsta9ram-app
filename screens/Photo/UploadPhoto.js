import React, { useState } from "react";
import { Alert, Image, ActivityIndicator } from "react-native";
import styled from "styled-components";
import styles from "../../styles";
import constants from "../../constants";
import useInput from "../../hooks/useInput";
import axios from "axios";

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
  const [fileUrl, setFileUrl] = useState("");
  const captionInput = useInput("");
  const locationInput = useInput("");
  const photo = navigation.getParam("photo");
  const handleSubmit = async () => {
    if (captionInput.value === "" || locationInput.value === "") {
      Alert.alert("All fields are required");
    }
    const name = photo.filename;
    const [, type] = name.split(".");
    const formData = new FormData();
    formData.append("file", {
      name,
      type: type.toLowerCase(),
      uri: photo.uri,
    });
    try {
      const {
        data: { path },
      } = await axios.post("http://localhost:4000/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setFileUrl(path);
    } catch (e) {
      Alert.alert("Can't upload", "Try later");
    }
  };
  return (
    <View>
      <Container>
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 80, height: 80, marginRight: 32 }}
        />
        <Form>
          <STextInput
            onChangeText={captionInput.onChange}
            value={captionInput.value}
            placeholder="Caption"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
          />
          <STextInput
            onChangeText={locationInput.onChange}
            value={locationInput.value}
            placeholder="Location"
            multiline={true}
            placeholderTextColor={styles.darkGreyColor}
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
