const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Start from "./screens/Start";
import AIm from "./screens/AIm";
import Frame from "./components/Frame";
import ItemHistory from "./components/ItemHistory";
import TopCard from "./components/TopCard";
import CheckThngTin from "./screens/CheckThngTin";
import Camera from "./screens/Camera";
import Bill from "./screens/Bill";
import Menu from "./screens/Menu";
import NgK2 from "./screens/NgK2";
import NgK1 from "./screens/NgK1";
import ThiGian from "./screens/ThiGian";
import History1 from "./screens/History1";
import Payment from "./screens/Payment";
import VaVechaiList from "./screens/VaVechaiList";
import Completed from "./screens/Completed";
import LoginAs from "./screens/LoginAs";
import NgNhp from "./screens/NgNhp";
import Homepage from "./screens/Homepage";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "RadioCanada-Medium": require("./assets/fonts/RadioCanada-Medium.ttf"),
    "RadioCanada-Bold": require("./assets/fonts/RadioCanada-Bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="Start"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="Start"
                  component={Start}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AIm"
                  component={AIm}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Frame"
                  component={Frame}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ItemHistory"
                  component={ItemHistory}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TopCard"
                  component={TopCard}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CheckThngTin"
                  component={CheckThngTin}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Camera"
                  component={Camera}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Bill"
                  component={Bill}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NgK2"
                  component={NgK2}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NgK1"
                  component={NgK1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ThiGian"
                  component={ThiGian}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="History1"
                  component={History1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Payment"
                  component={Payment}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VaVechaiList"
                  component={VaVechaiList}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Completed"
                  component={Completed}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LoginAs"
                  component={LoginAs}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NgNhp"
                  component={NgNhp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Homepage"
                  component={Homepage}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
