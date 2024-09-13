import * as S from './styles'

interface HighLightProps {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: HighLightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
