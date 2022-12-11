import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { styles } from './styles'

export function Pinch() {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const onPinchGesture = Gesture.Pinch().onUpdate((event) => {
    scale.value = event.scale
  })

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onPinchGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}
