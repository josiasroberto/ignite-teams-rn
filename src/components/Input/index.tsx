import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

export interface InputProps {}

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme()

  return <S.Container {...rest} placeholderTextColor={COLORS.GRAY_300} />
}
