import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const PhotoTabs = createMaterialTopTabNavigator(
  {
    SelectPhoto,
    TakePhoto,
  },
  {
    tabBarPosition: "bottom",
  }
);

const PhotoNavigation = createStackNavigator({
  PhotoTabs,
  UploadPhoto,
});

export default PhotoNavigation;
