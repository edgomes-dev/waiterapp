import * as S from "./styles";
import { Text } from "../Text";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ label, onPress, disabled }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {label}
      </Text>
    </S.Container>
  );
}
