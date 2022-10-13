import React from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "@assets/apple.svg";
import GoogleSvg from "@assets/google.svg";
import LogoSvg from "@assets/logo.svg";

import { SignInSocialButton } from "@components/SignInSocialButton";

import * as S from "./styles";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signInWithGoogle, user } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
      console.log(user);
    } catch (error) {
      console.error(error);
      Alert.alert("Não foi possível conectar a conta Google");
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <S.Title>
            Controle suas {"\n"}finanças de forma{"\n"} muito simples
          </S.Title>
        </S.TitleWrapper>
        <S.SignInTitle>
          Faça seu login com{"\n"} uma das contas abaixo
        </S.SignInTitle>
      </S.Header>

      <S.Footer>
        <S.FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
}
