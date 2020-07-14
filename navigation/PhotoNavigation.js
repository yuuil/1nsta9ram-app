import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles } from "./config";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator(
  {
    Select: {
      screen: SelectPhoto,
      navigationOptions: {
        tabBarLabel: "Select",
      },
    },
    Take: {
      screen: TakePhoto,
      navigationOptions: {
        tabBarLabel: "Take",
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
    UploadPhoto,
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerStyle: {
        ...stackStyles,
      },
    },
  }
);

export default PhotoNavigation;
