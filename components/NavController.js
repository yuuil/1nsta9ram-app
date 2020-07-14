import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <View style={{ flex: 1 }}>
      <MainNavigation />
      {/* {isLoggedIn ? <MainNavigation /> : <AuthNavigation />} */}
    </View>
  );
};

export default NavController;
