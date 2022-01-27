import React, { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import { Button } from '@components/Controllers/Button'
import { Input } from '@components/Controllers/Input'
import { Form, Title } from './styles'

export function AccountForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount() {
    setIsLoading(true)

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Conta criada com sucesso!')
      })
      .catch(() => {
        Alert.alert('Erro ao criar conta!')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Form>
      <Title>Cadastrar</Title>
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Form>
  )
}
