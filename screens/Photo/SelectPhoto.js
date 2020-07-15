import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import Loader from "../../components/Loader";
import { Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import constants from "../../constants";
import styles from "../../styles";

const View = styled.View`
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  width: 100px;
  height: 32px;
  position: absolute;
  top: 16px;
  right: 4px;
  background-color: ${styles.blueColor};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

const SelectPhoto = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState([]);
  const [allPhotos, setAllPhotos] = useState();
  const changeSelected = (photo) => {
    if(selected.length === 10) {
      Alert.alert("Upload limit", "한 번에 최대 10장까지 업로드 가능합니다.");
      return;
    }
    if(selected.includes(photo)) {
      if(selected.length === 1) return;
      const filtered = selected.filter(p => p.id !== photo.id);
      setSelected([...filtered]);
    } else {
      setSelected([photo, ...selected]);
    }
  };
  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync();
      const [firstPhoto] = assets;
      setSelected([firstPhoto]);
      setAllPhotos(assets);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        setHasPermission(true);
        getPhotos();
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    }
  };
  const handleSelected = () => {
    navigation.navigate("Upload", { photo: selected });
  };
  useEffect(() => {
    askPermission();
  }, []);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{
                  width: constants.width,
                  height: constants.height / 2,
                }}
                source={{ uri: selected[0].uri }}
              />
              <Button onPress={handleSelected}>
                <Text>Upload</Text>
              </Button>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {allPhotos.map((photo) => (
                  <TouchableOpacity
                    key={photo.id}
                    onPress={() => changeSelected(photo)}
                  >
                    <Image
                      key={photo.id}
                      source={{ uri: photo.uri }}
                      style={{
                        width: constants.width / 3,
                        height: constants.height / 6,
                        opacity: selected.includes(photo) ? 0.5 : 1,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : (
            "Oops"
          )}
        </View>
      )}
    </View>
  );
};

export default SelectPhoto;
