import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({ title, svg: SVG, ...rest }: Props) {
  return (
    <S.Button {...rest} activeOpacity={5}>
      <S.ImageContainer>
        <SVG />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
