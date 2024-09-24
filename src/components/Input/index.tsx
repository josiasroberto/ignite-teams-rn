import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

export interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <S.Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}
