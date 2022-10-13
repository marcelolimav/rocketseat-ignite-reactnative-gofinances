import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { AuthProvider } from "./src/hooks/auth";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { AppLoading } from "@components/AppLoading";
import { SignIn } from "@screens/SignIn";

import theme from "@global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <NavigationContainer>
        <AuthProvider>{fontsLoaded ? <SignIn /> : <AppLoading />}</AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
