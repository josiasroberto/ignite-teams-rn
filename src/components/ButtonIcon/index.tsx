import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { ButtonTypeStyleProps } from '@components/Button/styles'
import { MaterialIcons } from '@expo/vector-icons'

export interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonTypeStyleProps
}

export function ButtonIcon({
  icon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  )
}
