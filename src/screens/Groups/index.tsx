import * as S from './styles'

import {
  Button,
  GroupCard,
  Header,
  ListEmpty,
  Highlight,
} from '@components/index'

import { useState } from 'react'
import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setgroups] = useState([])

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" />
    </S.Container>
  )
}
