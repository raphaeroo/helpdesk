import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import signUpAnimation from '@assets/animations/signup.json'

import { Lottie } from '@components/Animations/Lottie'

import { AccountForm } from '@components/Forms/AccountForm'
import { Container, Content, SubTitle, BackButton, BackText } from './styles'

export function Register() {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Lottie source={signUpAnimation} />

          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <AccountForm />

          <BackButton onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={theme.COLORS.PRIMARY}
            />
            <BackText>Eu já tenho uma conta</BackText>
          </BackButton>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}
