import React, { useState } from 'react'
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { Input } from '@components/Controllers/Input'
import { Button } from '@components/Controllers/Button'
import { TextArea } from '@components/Controllers/TextArea'
import { bottomSheetRef } from '@components/Controllers/NewOrder'
import { Form, Title } from './styles'

export function OrderForm() {
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewOrder() {
    setIsLoading(true)

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert('Chamado aberto com sucesso')
        bottomSheetRef.current?.close()
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <Form>
      <Title>Novo chamado</Title>
      <Input placeholder="Número do Patrimônio" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />

      <Button
        title="Enviar chamado"
        isLoading={isLoading}
        onPress={handleNewOrder}
      />
    </Form>
  )
}
