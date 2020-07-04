import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AuthHome from "../screens/Auth/AuthHome";
import Singup from "../screens/Auth/Singup";
import Login from "../screens/Auth/Login";
import Confirm from "../screens/Auth/Confirm";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    Singup,
    Login,
    Confirm,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AuthNavigation);
