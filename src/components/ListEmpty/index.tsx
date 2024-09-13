import * as S from './styles'

export interface ListEmptyProps {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
