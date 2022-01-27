import React, { createRef } from 'react'
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet'

import { Button } from '@components/Controllers/Button'
import { OrderForm } from '@components/Forms/OrderForm'
import { Background } from './styles'

export const bottomSheetRef = createRef<BottomSheetModal>()

export function NewOrder() {
  function handleSnapPress() {
    bottomSheetRef.current?.present()
  }

  return (
    <>
      <Button title="Novo chamado" onPress={handleSnapPress} />

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['50%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background />}>
          <BottomSheetView>
            <OrderForm />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  )
}
