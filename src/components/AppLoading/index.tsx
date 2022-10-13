import { Image } from "react-native";
import logo from "@assets/logoLoading.png";
import * as S from "./styles";

export const AppLoading = () => {
  return (
    <S.Container>
      <Image source={logo} />
      <S.Title>Só mais um pouquinho...</S.Title>
    </S.Container>
  );
};
