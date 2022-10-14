import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "@routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { AppLoading } from "@components/AppLoading";

import theme from "@global/styles/theme";
import { useAuth } from "@hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded || userStorageLoading ? (
        <AuthProvider>
          <Routes />
        </AuthProvider>
      ) : (
        <AppLoading />
      )}
    </ThemeProvider>
  );
}
