import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { styles } from './styles'

export function Pan() {
  const position = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }]
  }))

  const onPanGesture = 
    Gesture
      .Pan()
      .minPointers(2)
      .onUpdate((event) => {
        position.value = event.translationX

        if (event.translationX >= 0) {
          console.log('Going to right!')
        } else {
          console.log('Going to left!')
        }
      })

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onPanGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  )
}