import React, { useState } from 'react'

import { Input } from '@components/Controllers/Input'
import { Button } from '@components/Controllers/Button'
import { TextArea } from '@components/Controllers/TextArea'
import { Form, Title } from './styles'

export function OrderForm() {
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewOrder() {
    setIsLoading(true)
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
