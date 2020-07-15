import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles } from "./config";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator(
  {
    Take: {
      screen: TakePhoto,
      navigationOptions: {
        tabBarLabel: "Take",
      },
    },
    Select: {
      screen: SelectPhoto,
      navigationOptions: {
        tabBarLabel: "Select",
      },
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: styles.blackColor,
      inactiveTintColor: styles.darkGreyColor,
      indicatorStyle: {
        display: "none",
      },
      labelStyle: {
        fontWeight: "600",
      },
      style: {
        ...stackStyles,
        paddingBottom: 16,
      },
    },
  }
);

const PhotoNavigation = createStackNavigator(
  {
    Tabs: {
      screen: PhotoTabs,
      navigationOptions: {
        title: "Choose Photo",
      },
    },
    Upload: {
      screen: UploadPhoto,
      navigationOptions: {
        title: "Upload"
      }
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerStyle: {
        ...stackStyles,
      },
      headerTintColor: styles.blackColor,
    },
  }
);

export default PhotoNavigation;
