import { Pressable, View } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  interpolateColor
} from 'react-native-reanimated'

import { styles } from './styles'

export function Touches() {
  const dimensions = useSharedValue(100) // Creates a specific state to be used in animations
  const doubleTapActive = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    width: dimensions.value,
    height: dimensions.value,
    backgroundColor: interpolateColor(doubleTapActive.value, [0, 1], ['#8527E5', '#BF5A07']), // interpolateColor - shared value, possibilities of shared value, colors by possibilities
  })) // Hook to pass the styles to the component

  function onPressIn() {
    dimensions.value = withSpring(150) // Change the value of the View with spring
  }

  function onPressOut() {
    dimensions.value = withSpring(100) // Change the value of the View with spring
  }

  const onGesture = 
    Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(() => {
      doubleTapActive.value = 
        withTiming(doubleTapActive.value === 0 ? 1 : 0, { duration: 500 })
    })

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onGesture}>
        <Pressable 
          onPressIn={onPressIn} 
          onPressOut={onPressOut}
        >
          <Animated.View style={[styles.box, animatedStyle]} />
        </Pressable>
      </GestureDetector>
    </View>
  )
}