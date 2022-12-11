import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { styles } from './styles'

export function LongPress() {
  const size = useSharedValue(100)

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value
  }))

  const onLongPressGesture = 
    Gesture
    .LongPress()
    .onTouchesDown(() => {
      size.value = withTiming(size.value + 200, { duration: 500 })
    })
    .onEnd((event, success) => {
      size.value = withTiming(100, { duration: 500 })
    })

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onLongPressGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}