import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Touches } from './src/components/Touches'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Touches />
    </GestureHandlerRootView>
  )
}
