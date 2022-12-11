import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { styles } from './styles'

export function Rotation() {
  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
  }))

  const onRotationGesture = Gesture.Rotation().onUpdate((event) => {
    rotation.value = event.rotation
  })

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onRotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}
