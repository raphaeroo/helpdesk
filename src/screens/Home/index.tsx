import React from 'react'

import { Header } from '@components/Layout/Header'
import { Orders } from '@components/Lists/Orders'
import { NewOrder } from '@components/Controllers/NewOrder'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Orders />
      <NewOrder />
    </Container>
  )
}
