import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "@components/Form/Input";

import * as S from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string | undefined;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <S.Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
