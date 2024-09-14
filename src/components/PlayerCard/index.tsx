// import { ButtonIcon } from '@components/index'
// import ButtonIcon directly to avoid Require cycle
// Require cycle: src\components\index.ts ->
//   src\components\PlayerCard\index.tsx ->
//   src\components\index.ts
import { ButtonIcon } from '@components/ButtonIcon'
import * as S from './styles'

export interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  )
}
