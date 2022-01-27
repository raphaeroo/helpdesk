import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

import { FooterButton } from '@components/Controllers/FooterButton'
import { Button } from '@components/Controllers/Button'
import { Input } from '@components/Controllers/Input'
import { Form, Title, Footer } from './styles'

const handleError = (error: string) => {
  if (error.includes('[auth/invalid-email]')) {
    return 'Email inválido'
  }

  if (error.includes('[auth/user-disabled]')) {
    return 'Usuário desabilitado'
  }

  if (error.includes('[auth/user-not-found]')) {
    return 'Usuário não encontrado'
  }

  if (error.includes('[auth/wrong-password]')) {
    return 'Senha incorreta'
  }

  return 'Erro desconhecido'
}

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  function handleSignIn() {
    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setIsLoading(false)
        const error = handleError(String(err.message))
        Alert.alert(error)
      })
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Redefinir Senha', 'Enviamos um email para você'))
      .catch(() => {
        Alert.alert('Ops', 'Não foi possível redefinir sua senha, tente mais tarde')
      })
  }

  return (
    <Form>
      <Title>Entrar</Title>
      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <FooterButton
          title="Criar conta"
          icon="person-add"
          onPress={() => navigation.navigate('register')}
        />
        <FooterButton
          title="Esqueci senha"
          icon="email"
          onPress={handleForgotPassword}
        />
      </Footer>
    </Form>
  )
}
